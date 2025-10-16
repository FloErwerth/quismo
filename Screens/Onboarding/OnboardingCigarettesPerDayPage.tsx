import { router } from "expo-router";
import type { ParseKeys } from "i18next";
import { useTranslation } from "react-i18next";
import { SizableText, View } from "tamagui";
import { z } from "zod";
import { ScrollableScreen } from "@/components/Screens/ScrollableScreen";
import { OnboardingInput } from "@/Screens/Onboarding/components/OnboardingInput";
import { OnboardingPage } from "@/Screens/Onboarding/components/OnboardingPage";
import { useStore } from "@/storage";

const cigarettesPerDaySchema = z
	.number()
	.min(0)
	.max(100)
	.refine((number) => {
		if (number === 0) {
			return undefined;
		}
		return number;
	});

const getAddictionSeverity = (
	t: (key: ParseKeys) => string,
	cigarettesPerDay?: number,
) => {
	if (cigarettesPerDay === undefined) {
		return t("onboarding.numberPerDay.severity.unknown");
	}
	if (cigarettesPerDay >= 0 && cigarettesPerDay <= 5) {
		return t("onboarding.numberPerDay.severity.low");
	}
	if (cigarettesPerDay >= 6 && cigarettesPerDay <= 10) {
		return t("onboarding.numberPerDay.severity.mild");
	}
	if (cigarettesPerDay >= 11 && cigarettesPerDay <= 20) {
		return t("onboarding.numberPerDay.severity.moderate");
	}
	if (cigarettesPerDay >= 21 && cigarettesPerDay <= 30) {
		return t("onboarding.numberPerDay.severity.strong");
	}
	if (cigarettesPerDay >= 31) {
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
		<ScrollableScreen flex={1}>
			<OnboardingPage
				currentPage={2}
				nextButtonDisabled={
					!cigarettesPerDaySchema.safeParse(averageCigarettesSmokedPerDay)
						.success
				}
				onNext={() => router.push("/onboarding/numberOfCigarettesPerBoxPage")}
				title={t("onboarding.numberPerDay.title")}
			>
				<OnboardingInput
					label={t("onboarding.numberPerDay.label")}
					subLabel={t("onboarding.numberPerDay.subLabel")}
					value={averageCigarettesSmokedPerDay?.toString()}
					maxLength={3}
					keyboardType="number-pad"
					onChangeText={(text: string) => {
						const result = cigarettesPerDaySchema.safeParse(Number(text));
						if (!result.success) {
							updateAverageCigarettesSmokedPerDay(undefined);
							return;
						}
						updateAverageCigarettesSmokedPerDay(result.data);
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
		</ScrollableScreen>
	);
};
