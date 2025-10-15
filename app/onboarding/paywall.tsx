import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import RevenueCatUI from "react-native-purchases-ui";
import { useOnboardingStoreValues } from "@/Screens/Onboarding/store";

export default function Paywall() {
	const onboardingValues = useOnboardingStoreValues();

	// persist the onboarding state in async storage
	useEffect(() => {
		Promise.all([
			Object.entries(onboardingValues).map(([key, value]) => {
				if (value !== undefined) {
					return AsyncStorage.setItem(key, JSON.stringify(value));
				}
				return Promise.resolve();
			}),
		]);
	}, [onboardingValues]);

	return <RevenueCatUI.Paywall onPurchaseCompleted={() => {}} />;
}
