import { router } from "expo-router";
import RevenueCatUI from "react-native-purchases-ui";
import { useSubscriptionContext } from "@/providers/RevenueCat";
import { useStore } from "@/storage/storage";
import { PHASES } from "@/types";

export default function Paywall() {
	const setPreperationPhaseStartDate = useStore(
		(state) => state.setPreperationPhaseStartDate,
	);
	const setPhase = useStore((state) => state.setPhase);
	const { checkSubscription } = useSubscriptionContext();

	const phase = useStore((state) => state.phase);

	const handlePurchaseCompleted = () => {
		if (phase === undefined) {
			setPhase(PHASES.PREPERATION);
			setPreperationPhaseStartDate(new Date());
		}
		checkSubscription();
	};

	return (
		<RevenueCatUI.Paywall
			onPurchaseCompleted={handlePurchaseCompleted}
			onDismiss={() => router.replace("/onboarding")}
		/>
	);
}
