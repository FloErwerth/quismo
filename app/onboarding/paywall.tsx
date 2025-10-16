import { router } from "expo-router";
import RevenueCatUI from "react-native-purchases-ui";
import { useSubscriptionContext } from "@/providers/RevenueCat";
import { PHASES, useStore } from "@/storage";

export default function Paywall() {
	const updatePhase1Since = useStore((state) => state.updatePhase1Since);
	const updatePhase = useStore((state) => state.updatePhase);
	const { checkSubscription } = useSubscriptionContext();

	const phase = useStore((state) => state.phase);

	const handlePurchaseCompleted = () => {
		if (phase === undefined) {
			updatePhase(PHASES.PREPERATION);
			updatePhase1Since(new Date());
		}
		checkSubscription();
	};

	return (
		<RevenueCatUI.Paywall
			onPurchaseCompleted={handlePurchaseCompleted}
			onDismiss={() => router.replace("/onboarding/startJourney")}
		/>
	);
}
