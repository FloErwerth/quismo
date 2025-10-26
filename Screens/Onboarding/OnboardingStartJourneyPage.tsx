import { useTranslation } from "react-i18next";
import { Card, SizableText, View, XStack } from "tamagui";
import { currencySymbols } from "@/config/currencies";
import { getMotivationOptions } from "@/config/preperation";
import { OnboardingPage } from "@/Screens/Onboarding/components/OnboardingPage";
import { usePreperationStore } from "@/storage/phaseStorage";
import { useStore } from "@/storage/storage";

export const OnboardingStartJourneyPage = () => {
	const { t } = useTranslation();
	const averageCigarettesSmokedPerDay = useStore(
		(state) => state.averageCigarettesSmokedPerDay,
	);

	const currency = useStore((state) => state.currency);
	const name = useStore((state) => state.name);
	const motivations = usePreperationStore((state) => state.motivations);

	const cigarettesPerBox = useStore((state) => state.cigarettesPerBox);
	const boxPrice = useStore((state) => state.boxPrice);

	if (
		cigarettesPerBox === undefined ||
		boxPrice === undefined ||
		averageCigarettesSmokedPerDay === undefined ||
		currency === undefined
	) {
		return null;
	}

	const todayDailyCost =
		(parseFloat(averageCigarettesSmokedPerDay) / parseFloat(cigarettesPerBox)) *
		parseFloat(boxPrice);

	const yearlyCost = (todayDailyCost * 365) / 2;

	const mappedMotivations = motivations.map((motivation) => {
		const option = getMotivationOptions(t)[motivation];

		return (
			<View
				key={motivation}
				borderRadius="$6"
				padding="$3"
				backgroundColor="$blue2Light"
			>
				<SizableText color="$blue11Light" size="$7">
					{option.label}
				</SizableText>
			</View>
		);
	});

	return (
		<OnboardingPage
			nextButtonIsLoadingButton
			nextButtonText={t("onboarding.startJourney.startJourneyButton")}
			title={t("onboarding.startJourney.title", {
				name: name,
			})}
		>
			<SizableText>
				Schau Dir noch einmal kurz deine Motivationen und Angaben an:
			</SizableText>
			<Card padded elevate gap="$4">
				<XStack alignItems="center" justifyContent="space-between">
					<SizableText size="$8">Deine Ersparnisse</SizableText>
					<SizableText size="$4">in 6 Monaten</SizableText>
				</XStack>
				<SizableText color="$green10Light" textAlign="center" size="$12">
					{yearlyCost.toFixed(2)} {currencySymbols[currency]}
				</SizableText>
				<SizableText>Das wird dir einfach so übrig bleiben!</SizableText>
			</Card>
			<View gap="$2">
				<SizableText size="$7">Deine Hauptmotivatoren</SizableText>
				<View gap="$2" flexWrap="wrap" flexDirection="row">
					{mappedMotivations}
				</View>
			</View>
			<View gap="$2">
				<SizableText size="$7">Einstellungen</SizableText>
				<View gap="$2" flexDirection="row" flexWrap="wrap">
					<Card flex={1} padded elevate gap="$4">
						<SizableText color="$blue11Light" size="$10">
							{averageCigarettesSmokedPerDay}
						</SizableText>
						<SizableText size="$3" fontWeight="bold">
							Zigaretten / Tag
						</SizableText>
					</Card>
					<Card flex={1} padded elevate gap="$4">
						<SizableText color="$blue11Light" size="$10">
							{cigarettesPerBox}
						</SizableText>
						<SizableText size="$3" fontWeight="bold">
							Zigaretten/ Schachtel
						</SizableText>
					</Card>
				</View>
				<Card flex={1} padded elevate gap="$4">
					<SizableText color="$blue11Light" size="$10">
						{boxPrice} {currencySymbols[currency]}
					</SizableText>
					<SizableText size="$3" fontWeight="bold">
						Kosten / Schachtel
					</SizableText>
				</Card>
			</View>
		</OnboardingPage>
	);
};
