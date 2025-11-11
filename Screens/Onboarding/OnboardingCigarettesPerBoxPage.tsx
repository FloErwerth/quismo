import { useTranslation } from "react-i18next";
import { StepperPage } from "@/components/Stepper/StepperPage";
import { OnboardingInput } from "@/Screens/Onboarding/components/OnboardingInput";
import { useStoreSelector } from "@/storage/storage";
import { isValidDecimalNumber } from "@/utils/number";

export const OnboardingCigarettesPerBoxPage = () => {
	const { t } = useTranslation();
	const cigarettesPerBox = useStoreSelector((state) => state.cigarettesPerBox);
	const updateCigarettesPerBox = useStoreSelector(
		(state) => state.updateCigarettesPerBox,
	);

	return (
		<StepperPage
			nextButtonDisabled={
				cigarettesPerBox === undefined || Number.isNaN(Number(cigarettesPerBox))
			}
			bubbleTextConfig={{
				imageConfig: {
					source: require("@/assets/images/smoqui_note.png"),
					width: 150,
					height: 150,
				},
				text: t("onboarding.cigarettesPerBox.title"),
			}}
		>
			<OnboardingInput
				label="Anzahl Zigaretten pro Schachtel"
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
		</StepperPage>
	);
};
