import { OnboardingInput } from "@/Screens/Onboarding/components/OnboardingInput";
import { OnboardingPage } from "@/Screens/Onboarding/components/OnboardingPage";
import { useStore } from "@/storage/storage";
import { isValidDecimalNumber } from "@/utils/number";

export const OnboardingCigarettesPerBoxPage = () => {
	const cigarettesPerBox = useStore((state) => state.cigarettesPerBox);

	const updateCigarettesPerBox = useStore(
		(state) => state.updateCigarettesPerBox,
	);

	return (
		<OnboardingPage
			nextButtonDisabled={
				cigarettesPerBox === undefined || Number.isNaN(Number(cigarettesPerBox))
			}
			title="Wie viele Zigaretten sind in einer Schachtel?"
		>
			<OnboardingInput
				label="Anzahl Zigaretten pro Schachtel"
				subLabel="Das hilft uns dabei deine finanziellen Einsparungen zu berechnen"
				value={cigarettesPerBox?.toString()}
				onChangeText={(text) => {
					if (!isValidDecimalNumber(text)) {
						return;
					}

					updateCigarettesPerBox(text.replace(",", "."));
				}}
				maxLength={12}
				keyboardType="number-pad"
			/>
		</OnboardingPage>
	);
};
