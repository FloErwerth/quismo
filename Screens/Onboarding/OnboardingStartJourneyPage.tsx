import { Redirect, router } from "expo-router";
import { useTranslation } from "react-i18next";
import { SizableText, View } from "tamagui";
import { ScrollableScreen } from "@/components/Screens/ScrollableScreen";
import { OnboardingPage } from "@/Screens/Onboarding/components/OnboardingPage";
import { useStore } from "@/storage";

export const OnboardingStartJourneyPage = () => {
	const { t } = useTranslation();
	const averageCigarettesSmokedPerDay = useStore(
		(state) => state.averageCigarettesSmokedPerDay,
	);
	const currency = useStore((state) => state.currency);

	const cigarettesPerBox = useStore((state) => state.cigarettesPerBox);
	const boxPrice = useStore((state) => state.boxPrice);

	if (cigarettesPerBox === undefined) {
		return <Redirect href="/onboarding/numberOfCigarettesPerBoxPage" />;
	}

	if (boxPrice === undefined) {
		return <Redirect href="/onboarding/pricePerBoxPage" />;
	}

	if (averageCigarettesSmokedPerDay === undefined) {
		return <Redirect href="/onboarding/numberOfCigarettesPerDayPage" />;
	}

	if (currency === undefined) {
		return <Redirect href="/onboarding/pricePerBoxPage" />;
	}

	const todayDailyCost =
		(averageCigarettesSmokedPerDay / cigarettesPerBox) *
		Number(boxPrice.replace(",", "."));

	const yearlyCost = todayDailyCost * 365;

	return (
		<ScrollableScreen flex={1}>
			<OnboardingPage
				currentPage={5}
				nextButtonIsLoadingButton
				nextButtonText={t("onboarding.startJourney.startJourneyButton")}
				onNext={() => router.replace("/onboarding/paywall")}
				title={t("onboarding.startJourney.title")}
			>
				<SizableText>{t("onboarding.startJourney.intro")}</SizableText>
				<View gap="$4">
					<View gap="$2">
						<SizableText size="$7">
							{t("onboarding.startJourney.dailySavedLabel")}
						</SizableText>
						<View
							padding="$4"
							backgroundColor="$color.gray1Light"
							borderRadius="$4"
						>
							<SizableText size="$8">{todayDailyCost.toFixed(2)} €</SizableText>
						</View>
					</View>

					<View gap="$2">
						<SizableText size="$7">
							{t("onboarding.startJourney.sixYearsSavedLabel")}
						</SizableText>
						<View
							padding="$4"
							backgroundColor="$color.gray1Light"
							borderRadius="$4"
						>
							<SizableText size="$8">
								{(yearlyCost * 6).toFixed(2)} €
							</SizableText>
						</View>
					</View>
					<SizableText>
						{t("onboarding.startJourney.reasonToQuitLabel")}
					</SizableText>
				</View>
				<SizableText size="$7">
					{t("onboarding.startJourney.startJourneyLabel")}
				</SizableText>
			</OnboardingPage>
		</ScrollableScreen>
	);
};
