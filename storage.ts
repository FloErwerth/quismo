import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { Currency } from "@/config/currencies";

export const PHASES = {
	PREPERATION: "PREPERATION",
	SMOKE_STOP: "SMOKE_STOP",
	STABILIZATION: "STABILIZATION",
} as const;

export type Phase = (typeof PHASES)[keyof typeof PHASES];

type StoreValues = {
	cigarettesPerBox: number | undefined;
	boxPrice: number | undefined;
	averageCigarettesSmokedPerDay: number | undefined;
	name: string | undefined;
	currency: Currency | undefined;
	savedMoney: number | undefined;
	phase: Phase;
	phase1Since: Date | undefined;
};

type StoreActions = {
	updateCigarettesPerBox: (cigarettesPerBox: number | undefined) => void;
	updateBoxPrice: (boxPrice: number | undefined) => void;
	updateAverageCigarettesSmokedPerDay: (
		averageCigarettesSmokedPerDay: number | undefined,
	) => void;
	updateName: (name: string) => void;
	updateCurrency: (currency: Currency) => void;
	updateSavedMoney: (savedMoney: number) => void;
	updatePhase: (phase: Phase) => void;
	updatePhase1Since: (phase1Since: Date | undefined) => void;
};

export const useStore = create(
	persist<StoreValues & StoreActions>(
		(set) => ({
			cigarettesPerBox: undefined,
			boxPrice: undefined,
			averageCigarettesSmokedPerDay: undefined,
			name: undefined,
			currency: undefined,
			savedMoney: undefined,
			phase: PHASES.PREPERATION,
			phase1Since: undefined,
			updateCigarettesPerBox: (cigarettesPerBox: number | undefined) =>
				set({ cigarettesPerBox }),
			updateBoxPrice: (boxPrice: number | undefined) => set({ boxPrice }),
			updateAverageCigarettesSmokedPerDay: (
				averageCigarettesSmokedPerDay: number | undefined,
			) => set({ averageCigarettesSmokedPerDay }),
			updateName: (name: string) => set({ name }),
			updateCurrency: (currency: Currency) => set({ currency }),
			updateSavedMoney: (savedMoney: number) => set({ savedMoney }),
			updatePhase: (phase: Phase) => set({ phase }),
			updatePhase1Since: (phase1Since: Date | undefined) =>
				set({ phase1Since }),
		}),
		{
			name: "quismo-storage",
			storage: createJSONStorage(() => AsyncStorage),
		},
	),
);
