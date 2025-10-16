import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { Currency } from "@/config/currencies";

type StoreValues = {
	cigarettesPerBox: number | undefined;
	boxPrice: string | undefined;
	averageCigarettesSmokedPerDay: number | undefined;
	name: string | undefined;
	currency: Currency | undefined;
	savedMoney: number | undefined;
};

type StoreActions = {
	updateCigarettesPerBox: (cigarettesPerBox: number) => void;
	updateBoxPrice: (boxPrice: string) => void;
	updateAverageCigarettesSmokedPerDay: (
		averageCigarettesSmokedPerDay: number,
	) => void;
	updateName: (name: string) => void;
	updateCurrency: (currency: string) => void;
	updateSavedMoney: (savedMoney: number) => void;
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
			updateCigarettesPerBox: (cigarettesPerBox: number) =>
				set({ cigarettesPerBox }),
			updateBoxPrice: (boxPrice: string) => set({ boxPrice }),
			updateAverageCigarettesSmokedPerDay: (
				averageCigarettesSmokedPerDay: number,
			) => set({ averageCigarettesSmokedPerDay }),
			updateName: (name: string) => set({ name }),
			updateCurrency: (currency: string) => set({ currency }),
			updateSavedMoney: (savedMoney: number) => set({ savedMoney }),
		}),
		{
			name: "quismo-storage",
			storage: createJSONStorage(() => AsyncStorage),
		},
	),
);
