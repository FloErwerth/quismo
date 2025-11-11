import { useTranslation } from "react-i18next";
import { StepperPage } from "@/components/Stepper/StepperPage";
import { OnboardingInput } from "@/Screens/Onboarding/components/OnboardingInput";
import { useStoreSelector } from "@/storage/storage";
import { isValidDecimalNumber } from "@/utils/number";

export const OnboardingCigarettesPerDayPage = () => {
	const { t } = useTranslation();
	const averageCigarettesSmokedPerDay = useStoreSelector(
		(state) => state.averageCigarettesSmokedPerDay,
	);
	const updateAverageCigarettesSmokedPerDay = useStoreSelector(
		(state) => state.updateAverageCigarettesSmokedPerDay,
	);

	return (
		<StepperPage
			nextButtonDisabled={
				averageCigarettesSmokedPerDay === undefined ||
				Number.isNaN(Number(averageCigarettesSmokedPerDay))
			}
			bubbleTextConfig={{
				imageConfig: {
					source: require("@/assets/images/smoqui_note.png"),
					width: 150,
					height: 150,
				},
				text: t("onboarding.numberPerDay.title"),
			}}
		>
			<OnboardingInput
				label={t("onboarding.numberPerDay.label")}
				value={averageCigarettesSmokedPerDay?.toString()}
				maxLength={4}
				keyboardType="number-pad"
				onChangeText={(text) => {
					if (!isValidDecimalNumber(text)) {
						return;
					}
					updateAverageCigarettesSmokedPerDay(text.replace(",", "."));
				}}
			/>
		</StepperPage>
	);
};
