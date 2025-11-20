import { Step } from "@/components/Stepper/Step";
import { CheckInSmoked } from "@/config/checkin";
import { CheckInDidSmokeExplainReasonPage } from "@/Screens/CheckIn/flows/didSmoke/CheckInDidSmokeExplainReasonPage";
import { CheckInDidSmokeSelectReasonPage } from "@/Screens/CheckIn/flows/didSmoke/CheckInDidSmokeSelectReasonPage";
import { CheckInSmokeStatusFirstTimeSmokePage } from "@/Screens/CheckIn/flows/didSmoke/CheckInSmokeStatusFirstTimeSmokePage";
import { useCurrentCheckIn } from "@/Screens/CheckIn/hooks/useCurrentCheckIn";

export const useCheckInDidSmokeFlow = () => {
	const { checkIn } = useCurrentCheckIn();

	const didSmoke = checkIn?.didSmoke === CheckInSmoked.SMOKED;

	const steps = [];

	if (didSmoke) {
		steps.push(
			<Step key="first-time-smoke">
				<CheckInSmokeStatusFirstTimeSmokePage />
			</Step>,
			<Step key="select-reason">
				<CheckInDidSmokeSelectReasonPage />
			</Step>,
			<Step key="explain-reason">
				<CheckInDidSmokeExplainReasonPage />
			</Step>,
		);
	}

	return steps;
};
