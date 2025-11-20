import { GradientBackground } from "@/components/Backgrounds/GradientBackground";
import { Step } from "@/components/Stepper/Step";
import { Stepper } from "@/components/Stepper/Stepper";
import { CheckInIntroductionOverlay } from "@/Screens/CheckIn/CheckInIntroductionOverlay";
import { useCheckInDidNotSmokeFlow } from "@/Screens/CheckIn/flows/didNotSmoke/useDidNotSmokeFlow";
import { useCheckInDidSmokeFlow } from "@/Screens/CheckIn/flows/didSmoke/useCheckInDidSmokeFlow";
import { useFeelingsFlow } from "@/Screens/CheckIn/flows/feelings/useFeelingsFlow";
import { CheckInConfidencePage } from "@/Screens/CheckIn/pages/CheckInConfidencePage";
import { CheckInNextCheckInPage } from "@/Screens/CheckIn/pages/CheckInNextCheckInPage";
import { CheckInSmokeStatusPage } from "@/Screens/CheckIn/pages/CheckInSmokeStatusPage";

export const CheckIn = () => {
	const checkInDidSmokeFlow = useCheckInDidSmokeFlow();
	const checkInDidNotSmokeFlow = useCheckInDidNotSmokeFlow();
	const feelingsFlow = useFeelingsFlow();

	return (
		<GradientBackground>
			<CheckInIntroductionOverlay />
			<Stepper>
				<Step>
					<CheckInSmokeStatusPage />
				</Step>
				{checkInDidSmokeFlow}
				{checkInDidNotSmokeFlow}
				{feelingsFlow}
				<Step>
					<CheckInConfidencePage />
				</Step>
				<Step>
					<CheckInNextCheckInPage />
				</Step>
			</Stepper>
		</GradientBackground>
	);
};
