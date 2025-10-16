import { router } from "expo-router";
import RevenueCatUI from "react-native-purchases-ui";

export default function Paywall() {
	return (
		<RevenueCatUI.Paywall
			onDismiss={() => router.replace("/onboarding/startJourney")}
		/>
	);
}
