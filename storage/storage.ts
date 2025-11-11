import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import type { Currency } from "@/config/currencies";
import type { Concern, Motivation } from "@/config/motivationAndConcerns";
import { createSelectors } from "@/storage/utils";

export type StoreValues = {
	// onboarding
	onboardingCompleted: boolean;
	checkInTime: Date | undefined;
	cigarettesPerBox: string | undefined;
	boxPrice: string | undefined;
	averageCigarettesSmokedPerDay: string | undefined;
	name: string | undefined;
	currency: Currency | undefined;
	yearsSmoking: string | undefined;
	// preperation
	didShowPreperationModal: boolean;
	// check ins
	checkIns: { date: Date }[];
	hasSeenWelcomeDialog: boolean;
	// motivation
	motivation: Motivation | undefined;
	concerns: Concern[];
};

const initialState: StoreValues = {
	// onboarding
	name: undefined,
	checkInTime: undefined,
	onboardingCompleted: false,
	didShowPreperationModal: false,
	cigarettesPerBox: undefined,
	boxPrice: undefined,
	averageCigarettesSmokedPerDay: undefined,
	yearsSmoking: undefined,
	currency: undefined,
	motivation: undefined,
	concerns: [],
	checkIns: [],
	hasSeenWelcomeDialog: false,
} as const;

type StoreActions = {
	completeOnboarding: () => void;
	// onboarding
	resetAccount: (_keepCheckIns: boolean) => void;
	updateCigarettesPerBox: (cigarettesPerBox: string | undefined) => void;
	updateBoxPrice: (boxPrice: string | undefined) => void;
	updateCheckInTime: (checkInTime: Date | undefined) => void;
	updateAverageCigarettesSmokedPerDay: (
		averageCigarettesSmokedPerDay: string | undefined,
	) => void;
	updateName: (name: string) => void;
	updateCurrency: (currency: Currency) => void;
	updateYearsSmoking: (yearsSmoking: string | undefined) => void;
	updateDidShowPreperationModal: (didShowPreperationModal: boolean) => void;
	updateHasSeenWelcomeDialog: (hasSeenWelcomeDialog: boolean) => void;
	// check ins
	addCheckIn: (checkIn: { date: Date }) => void;
	removeCheckIn: (checkIn: { date: Date }) => void;
	// motivation
	addMotivation: (motivation: Motivation) => void;
	removeMotivation: (motivationId: Motivation) => void;
	resetMotivationsStorage: () => void;
	addConcern: (concern: Concern) => void;
	removeConcern: (concernId: Concern) => void;
	// general
	resetStore: () => void;
};

export const useStore = create(
	persist(
		immer<StoreValues & StoreActions>((set, _, store) => ({
			...initialState,
			completeOnboarding: () =>
				set((state) => {
					state.onboardingCompleted = true;
				}),
			resetAccount: (_keepCheckIns: boolean) =>
				set((state) => {
					const newState: StoreValues = {
						...initialState,
						hasSeenWelcomeDialog: state.hasSeenWelcomeDialog,
					};
					if (_keepCheckIns) {
						newState.checkIns = state.checkIns;
					}
					return newState;
				}),
			updateCigarettesPerBox: (cigarettesPerBox: string | undefined) =>
				set((state) => {
					state.cigarettesPerBox = cigarettesPerBox;
				}),
			updateBoxPrice: (boxPrice: string | undefined) =>
				set((state) => {
					state.boxPrice = boxPrice;
				}),
			updateCheckInTime: (checkInTime: Date | undefined) =>
				set((state) => {
					state.checkInTime = checkInTime;
				}),
			updateAverageCigarettesSmokedPerDay: (
				averageCigarettesSmokedPerDay: string | undefined,
			) =>
				set((state) => {
					state.averageCigarettesSmokedPerDay = averageCigarettesSmokedPerDay;
				}),
			updateName: (name: string) =>
				set((state) => {
					state.name = name;
				}),
			updateCurrency: (currency: Currency) =>
				set((state) => {
					state.currency = currency;
				}),
			updateYearsSmoking: (yearsSmoking: string | undefined) =>
				set((state) => {
					state.yearsSmoking = yearsSmoking;
				}),
			updateDidShowPreperationModal: (didShowPreperationModal: boolean) =>
				set((state) => {
					state.didShowPreperationModal = didShowPreperationModal;
				}),
			updateHasSeenWelcomeDialog: (hasSeenWelcomeDialog: boolean) =>
				set((state) => {
					state.hasSeenWelcomeDialog = hasSeenWelcomeDialog;
				}),
			resetStore: () =>
				set(() => {
					return store.getInitialState();
				}),
			addCheckIn: (checkIn: { date: Date }) =>
				set((state) => {
					state.checkIns.push(checkIn);
				}),
			removeCheckIn: (checkIn: { date: Date }) =>
				set((state) => {
					state.checkIns.splice(state.checkIns.indexOf(checkIn), 1);
				}),

			// motivation
			motivation: undefined,
			concerns: [],
			addConcern: (concern: Concern) =>
				set((state) => {
					state.concerns.push(concern);
				}),
			removeConcern: (concernId: Concern) =>
				set((state) => {
					state.concerns = state.concerns.filter(
						(concern) => concern !== concernId,
					);
				}),
			addMotivation: (motivation: Motivation | undefined) =>
				set((state) => {
					state.motivation = motivation;
				}),
			removeMotivation: () =>
				set((state) => {
					state.motivation = undefined;
				}),
			resetMotivationsStorage: () =>
				set((state) => {
					state.motivation = undefined;
				}),
		})),
		{
			name: "quismo-storage",
			storage: createJSONStorage(() => AsyncStorage),
		},
	),
);

export const useStoreSelector = createSelectors(useStore);
