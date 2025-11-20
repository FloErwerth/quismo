import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import type { CheckIn } from "@/config/checkin";
import type { Currency } from "@/config/currencies";
import type { Concern, Motivation } from "@/config/motivationAndConcerns";
import { createSelectors } from "@/storage/utils";

type StoredNotification = {
	timestamp: number;
	title: string;
	description: string;
};

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
	checkIns: Record<number, CheckIn>;
	hasSeenCheckInIntroduction: boolean;
	// motivation
	motivation: Motivation | undefined;
	concerns: Concern[];
	// notifications
	notificationsEnabled: boolean;
	storedNotifications: StoredNotification[];
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
	checkIns: {},
	hasSeenCheckInIntroduction: false,
	notificationsEnabled: false,
	storedNotifications: [],
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
	updateHasSeenCheckInIntroduction: (
		hasSeenCheckInIntroduction: boolean,
	) => void;
	// check ins
	updateCheckIn: (timeStamp: number, checkInProperty: Partial<CheckIn>) => void;
	removeCheckIn: (timestamp: number) => void;
	// motivation
	addMotivation: (motivation: Motivation) => void;
	removeMotivation: (motivationId: Motivation) => void;
	resetMotivationsStorage: () => void;
	addConcern: (concern: Concern) => void;
	removeConcern: (concernId: Concern) => void;
	// notifications
	updateNotificationsEnabled: (notificationsEnabled: boolean) => void;
	addStoredNotification: (notification: StoredNotification) => void;
	removeStoredNotification: (timestamp: number) => void;
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
						hasSeenCheckInIntroduction: state.hasSeenCheckInIntroduction,
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
			updateHasSeenCheckInIntroduction: (hasSeenCheckInIntroduction: boolean) =>
				set((state) => {
					state.hasSeenCheckInIntroduction = hasSeenCheckInIntroduction;
				}),
			updateNotificationsEnabled: (notificationsEnabled: boolean) =>
				set((state) => {
					state.notificationsEnabled = notificationsEnabled;
				}),
			addStoredNotification: (notification: StoredNotification) =>
				set((state) => {
					state.storedNotifications.push(notification);
				}),
			removeStoredNotification: (timestamp: number) =>
				set((state) => {
					state.storedNotifications = state.storedNotifications.filter(
						(notification) => notification.timestamp !== timestamp,
					);
				}),
			resetStore: () =>
				set(() => {
					return store.getInitialState();
				}),
			updateCheckIn: (timestamp: number, checkInProperty: Partial<CheckIn>) =>
				set((state) => {
					const savedCheckIn = state.checkIns[timestamp];
					state.checkIns[timestamp] = {
						...(savedCheckIn ?? {}),
						...checkInProperty,
					};
				}),
			removeCheckIn: (timestamp: number) =>
				set((state) => {
					delete state.checkIns[timestamp];
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
