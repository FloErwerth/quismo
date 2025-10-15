import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { atomWithStorage, createJSONStorage } from "jotai/utils";
import type { OnboardingStore } from "@/Screens/Onboarding/types";

export const storage = new MMKV();

const storage = createJSONStorage < OnboardingStore(() => AsyncStorage);
const onboardingStoreAtom = atomWithStorage<OnboardingStore>(
	"onboardingStore",
	{
		timeToHitGoal: undefined,
		cigarettesPerBox: undefined,
		boxPrice: undefined,
		averageCigarettesSmokedPerDay: undefined,
		name: undefined,
		currency: undefined,
		savedMoney: undefined,
	},
	storage,
	{
		getOnInit: true,
	},
);

export const useSetOnboardingStore = () => {
	const setOnboardingStore = useSetAtom(onboardingStoreAtom);
	return setOnboardingStore;
};

export const useOnboardingStoreValues = () => {
	const onboardingStore = useAtomValue(onboardingStoreAtom);
	return onboardingStore;
};

export const useOnboardingStore = () => {
	const onboardingStore = useAtom(onboardingStoreAtom);
	return onboardingStore;
};
