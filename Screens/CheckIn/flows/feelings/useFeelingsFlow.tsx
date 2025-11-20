import { Step } from "@/components/Stepper/Step";
import { CheckInFeelingsWhyPage } from "@/Screens/CheckIn/flows/feelings/CheckInFeelingsWhyPage";
import { CheckInSelectFeelingPage } from "@/Screens/CheckIn/flows/feelings/CheckInSelectFeelingPage";

export const useFeelingsFlow = () => {
	const steps = [
		<Step key="select-feeling">
			<CheckInSelectFeelingPage />
		</Step>,
		<Step key="why-feeling">
			<CheckInFeelingsWhyPage />
		</Step>,
	];

	return steps;
};
