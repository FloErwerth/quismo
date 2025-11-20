import { Step } from "@/components/Stepper/Step";
import { CheckInSmoked } from "@/config/checkin";
import { CheckInDidNotSmokeCongratulate } from "@/Screens/CheckIn/flows/didNotSmoke/CheckInDidNotSmokeCongratulate";
import { useCurrentCheckIn } from "@/Screens/CheckIn/hooks/useCurrentCheckIn";

export const useCheckInDidNotSmokeFlow = () => {
	const checkIns = useCurrentCheckIn();
	const didNotSmoke = checkIns.checkIn.didSmoke === CheckInSmoked.NOT_SMOKED;

	const steps = [];
	if (!didNotSmoke) {
		return null;
	}

	steps.push(
		<Step key="congratulate">
			<CheckInDidNotSmokeCongratulate />
		</Step>,
	);

	return steps;
};
