import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { Currency } from "@/config/currencies";
import type { Motivation } from "@/config/preperation";
import { PHASES, type Phase } from "@/types";

type StoreValues = {
	isTestUser: boolean;
	cigarettesPerBox: string | undefined;
	boxPrice: string | undefined;
	averageCigarettesSmokedPerDay: string | undefined;
	name: string | undefined;
	currency: Currency | undefined;
	savedMoney: string | undefined;
	yearsSmoking: string | undefined;
	phase: Phase;
	startOfPreperationPhase: Date | undefined;
	motivations: Motivation[];
};

type StoreActions = {
	updateIsTestUser: (isTestUser: boolean) => void;
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
	setPreperationPhaseStartDate: (date: Date) => void;
	addMotivation: (motivation: Motivation) => void;
	removeMotivation: (motivationId: Motivation) => void;
	setPhase: (phase: Phase) => void;
};

export const useStore = create(
	persist<StoreValues & StoreActions>(
		(set) => ({
			startOfPreperationPhase: undefined,
			motivations: [],
			phase: PHASES.PREPERATION,
			setPreperationPhaseStartDate: (date: Date) =>
				set({ startOfPreperationPhase: date }),
			addMotivation: (motivation: Motivation) =>
				set((state) => ({
					motivations: [...state.motivations, motivation],
				})),
			removeMotivation: (motivationId: Motivation) =>
				set((state) => ({
					motivations: state.motivations.filter(
						(motivation) => motivation !== motivationId,
					),
				})),
			setPhase: (phase: Phase) => set({ phase }),
			isTestUser: false,
			cigarettesPerBox: undefined,
			boxPrice: undefined,
			averageCigarettesSmokedPerDay: undefined,
			name: undefined,
			yearsSmoking: undefined,
			currency: undefined,
			savedMoney: undefined,
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
		}),
		{
			name: "quismo-storage",
			storage: createJSONStorage(() => AsyncStorage),
		},
	),
);
