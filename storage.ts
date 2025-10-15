import { create } from "zustand";

type StoreValues = {
	timeToHitGoal: string | undefined;
	cigarettesPerBox: number | undefined;
	boxPrice: string | undefined;
	averageCigarettesSmokedPerDay: number | undefined;
	name: string | undefined;
	currency: string | undefined;
	savedMoney: number | undefined;
};

type StoreActions = {
	updateTimeToHitGoal: (timeToHitGoal: string) => void;
	updateCigarettesPerBox: (cigarettesPerBox: number) => void;
	updateBoxPrice: (boxPrice: string) => void;
	updateAverageCigarettesSmokedPerDay: (
		averageCigarettesSmokedPerDay: number,
	) => void;
	updateName: (name: string) => void;
	updateCurrency: (currency: string) => void;
	updateSavedMoney: (savedMoney: number) => void;
};

export const useStore = create<StoreValues & StoreActions>((set) => ({
	timeToHitGoal: undefined,
	cigarettesPerBox: undefined,
	boxPrice: undefined,
	averageCigarettesSmokedPerDay: undefined,
	name: undefined,
	currency: undefined,
	savedMoney: undefined,
	updateTimeToHitGoal: (timeToHitGoal: string) => set({ timeToHitGoal }),
	updateCigarettesPerBox: (cigarettesPerBox: number) =>
		set({ cigarettesPerBox }),
	updateBoxPrice: (boxPrice: string) => set({ boxPrice }),
	updateAverageCigarettesSmokedPerDay: (
		averageCigarettesSmokedPerDay: number,
	) => set({ averageCigarettesSmokedPerDay }),
	updateName: (name: string) => set({ name }),
	updateCurrency: (currency: string) => set({ currency }),
	updateSavedMoney: (savedMoney: number) => set({ savedMoney }),
}));
