import type { ParseKeys } from "i18next";
import { useTranslation } from "react-i18next";
import { SizableText, View } from "tamagui";
import { OnboardingInput } from "@/Screens/Onboarding/components/OnboardingInput";
import { OnboardingPage } from "@/Screens/Onboarding/components/OnboardingPage";
import { useStore } from "@/storage/storage";
import { isValidDecimalNumber } from "@/utils/number";

const getAddictionSeverity = (
	t: (key: ParseKeys) => string,
	cigarettesPerDay?: string,
) => {
	const cigarettesPerDayNumber = Number(cigarettesPerDay);

	if (
		cigarettesPerDayNumber === undefined ||
		Number.isNaN(cigarettesPerDayNumber)
	) {
		return t("onboarding.numberPerDay.severity.unknown");
	}

	if (cigarettesPerDayNumber >= 0 && cigarettesPerDayNumber <= 5) {
		return t("onboarding.numberPerDay.severity.low");
	}
	if (cigarettesPerDayNumber > 5 && cigarettesPerDayNumber <= 10) {
		return t("onboarding.numberPerDay.severity.mild");
	}
	if (cigarettesPerDayNumber > 10 && cigarettesPerDayNumber <= 20) {
		return t("onboarding.numberPerDay.severity.moderate");
	}
	if (cigarettesPerDayNumber > 20 && cigarettesPerDayNumber <= 30) {
		return t("onboarding.numberPerDay.severity.strong");
	}
	if (cigarettesPerDayNumber > 30) {
		return t("onboarding.numberPerDay.severity.veryStrong");
	}
};

export const OnboardingCigarettesPerDayPage = () => {
	const { t } = useTranslation();
	const averageCigarettesSmokedPerDay = useStore(
		(state) => state.averageCigarettesSmokedPerDay,
	);
	const updateAverageCigarettesSmokedPerDay = useStore(
		(state) => state.updateAverageCigarettesSmokedPerDay,
	);

	return (
		<OnboardingPage
			nextButtonDisabled={
				averageCigarettesSmokedPerDay === undefined ||
				Number.isNaN(Number(averageCigarettesSmokedPerDay))
			}
			title={t("onboarding.numberPerDay.title")}
		>
			<OnboardingInput
				label={t("onboarding.numberPerDay.label")}
				subLabel={t("onboarding.numberPerDay.subLabel")}
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
			{averageCigarettesSmokedPerDay !== undefined && (
				<View
					alignSelf="center"
					borderRadius="$4"
					padding="$2"
					backgroundColor="$color.red6Light"
				>
					<SizableText>
						{getAddictionSeverity(t, averageCigarettesSmokedPerDay)}
					</SizableText>
				</View>
			)}
		</OnboardingPage>
	);
};
