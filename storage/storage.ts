import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { Currency } from "@/config/currencies";
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
};

export const useStore = create(
	persist<StoreValues & StoreActions>(
		(set) => ({
			isTestUser: false,
			cigarettesPerBox: undefined,
			boxPrice: undefined,
			averageCigarettesSmokedPerDay: undefined,
			name: undefined,
			yearsSmoking: undefined,
			currency: undefined,
			savedMoney: undefined,
			phase: PHASES.PREPERATION,
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
