import AsyncStorage from "@react-native-async-storage/async-storage";
import { produce } from "immer";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { useShallow } from "zustand/react/shallow";
import type { Currency } from "@/config/currencies";
import type { KnowledgeId } from "@/config/knowledge";
import { createSelectors } from "@/storage/utils";
import { PHASES, type Phase } from "@/types";

export type StoreValues = {
	// test
	isTestUser: boolean;
	// onboarding
	cigarettesPerBox: string | undefined;
	boxPrice: string | undefined;
	averageCigarettesSmokedPerDay: string | undefined;
	name: string | undefined;
	currency: Currency | undefined;
	savedMoney: string | undefined;
	yearsSmoking: string | undefined;
	// phases
	phase: Phase;
	// preperation
	startOfPreperationPhase: Date | undefined;
	didShowPreperationModal: boolean;
	acquiredKnowledge: KnowledgeId[];
};

const initialState: StoreValues = {
	acquiredKnowledge: [],
	startOfPreperationPhase: undefined,
	phase: PHASES.PREPERATION,
	didShowPreperationModal: false,
	isTestUser: false,
	cigarettesPerBox: undefined,
	boxPrice: undefined,
	averageCigarettesSmokedPerDay: undefined,
	name: undefined,
	yearsSmoking: undefined,
	currency: undefined,
	savedMoney: undefined,
} as const;

type StoreActions = {
	// test
	updateIsTestUser: (isTestUser: boolean) => void;
	// onboarding
	updateCigarettesPerBox: (cigarettesPerBox: string | undefined) => void;
	updateBoxPrice: (boxPrice: string | undefined) => void;
	updateAverageCigarettesSmokedPerDay: (
		averageCigarettesSmokedPerDay: string | undefined,
	) => void;
	updateName: (name: string) => void;
	updateCurrency: (currency: Currency) => void;
	updateSavedMoney: (savedMoney: string) => void;
	updatePhase: (phase: Phase) => void;
	updateYearsSmoking: (yearsSmoking: string | undefined) => void;
	updateDidShowPreperationModal: (didShowPreperationModal: boolean) => void;
	// phases
	setPhase: (phase: Phase) => void;
	// preperation
	setStartOfPreperationPhase: (startOfPreperationPhase: Date) => void;
	resetStore: () => void;
	addAcquiredKnowledge: (knowledgeId: KnowledgeId) => void;
	removeAcquiredKnowledge: (knowledgeId: KnowledgeId) => void;
	setupTestStorage: () => void;
};

export const useStore = create(
	persist<StoreValues & StoreActions>(
		(set, _, store) => ({
			...initialState,
			updateIsTestUser: (isTestUser: boolean) => set({ isTestUser }),
			updateCigarettesPerBox: (cigarettesPerBox: string | undefined) =>
				set({ cigarettesPerBox }),
			updateBoxPrice: (boxPrice: string | undefined) => set({ boxPrice }),
			updateAverageCigarettesSmokedPerDay: (
				averageCigarettesSmokedPerDay: string | undefined,
			) => set({ averageCigarettesSmokedPerDay }),
			updateName: (name: string) => set({ name }),
			updateCurrency: (currency: Currency) => set({ currency }),
			updateSavedMoney: (savedMoney: string) => set({ savedMoney }),
			updatePhase: (phase: Phase) => set({ phase }),
			updateYearsSmoking: (yearsSmoking: string | undefined) =>
				set({ yearsSmoking }),
			updateDidShowPreperationModal: (didShowPreperationModal: boolean) =>
				set({ didShowPreperationModal }),
			setPhase: (phase: Phase) => set({ phase }),
			setStartOfPreperationPhase: (startOfPreperationPhase: Date) =>
				set({ startOfPreperationPhase }),

			addAcquiredKnowledge: (knowledgeId: KnowledgeId) =>
				set((state) =>
					produce(state, (draft) => {
						if (draft.acquiredKnowledge.includes(knowledgeId)) {
							return;
						}
						draft.acquiredKnowledge.push(knowledgeId);
					}),
				),
			removeAcquiredKnowledge: (knowledgeId: KnowledgeId) =>
				set((state) =>
					produce(state, (draft) => {
						const index = draft.acquiredKnowledge.indexOf(knowledgeId);
						if (index === -1) {
							return;
						}
						draft.acquiredKnowledge.splice(index, 1);
					}),
				),
			resetStore: () => set(store.getInitialState()),
			setupTestStorage: () =>
				set({
					isTestUser: true,
					phase: PHASES.PREPERATION,
					startOfPreperationPhase: new Date(),
					acquiredKnowledge: [],
					didShowPreperationModal: false,
				}),
		}),
		{
			name: "quismo-storage",
			storage: createJSONStorage(() => AsyncStorage),
		},
	),
);

export const useStoreSelector = <T>(selector: (state: StoreValues) => T): T => {
	const base = createSelectors(useStore);

	return useShallow(base)(selector) as T;
};
