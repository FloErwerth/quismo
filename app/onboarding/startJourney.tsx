import { Redirect, router } from "expo-router";
import { SizableText, View } from "tamagui";
import { ScrollableScreen } from "@/components/Screens/ScrollableScreen";
import { OnboardingPage } from "@/Screens/Onboarding/components/OnboardingPage";
import { STORAGE_KEYS, useStoreNumber, useStoreString } from "@/storage";

export default function Method() {
	const [averageCigarettesSmokedPerDay] = useStoreNumber(
		STORAGE_KEYS.AVERAGE_CIGARETTES_SMOKED_PER_DAY,
	);
	const [boxPrice] = useStoreString(STORAGE_KEYS.BOX_PRICE);
	const [cigarettesPerBox] = useStoreNumber(STORAGE_KEYS.CIGARETTES_PER_BOX);
	const [timeToHitGoal] = useStoreString(STORAGE_KEYS.TIME_TO_HIT_GOAL);

	if (cigarettesPerBox === undefined) {
		return <Redirect href="/onboarding/numberOfCigarettesPerBoxPage" />;
	}

	if (boxPrice === undefined) {
		return <Redirect href="/onboarding/pricePerBoxPage" />;
	}

	if (averageCigarettesSmokedPerDay === undefined) {
		return <Redirect href="/onboarding/numberOfCigarettesPerDayPage" />;
	}

	if (timeToHitGoal === undefined) {
		return <Redirect href="/onboarding/time" />;
	}

	const todayDailyCost =
		(averageCigarettesSmokedPerDay / cigarettesPerBox) *
		Number(boxPrice.replace(",", "."));

	const yearlyCost = todayDailyCost * 365;

	return (
		<ScrollableScreen flex={1}>
			<OnboardingPage
				nextButtonText="Mit deiner Entwöhnung starten"
				onNext={() => router.replace("/onboarding/paywall")}
				title="Gute Nachrichten!"
			>
				<SizableText>
					Deine Entscheidung mit dem Rauchen aufzuhören werden Dir viel Geld
					sparen. Sieh Dir unsere Berechnungen an:
				</SizableText>
				<View gap="$4">
					<View gap="$2">
						<SizableText>Jeden Tag gespartes Geld:</SizableText>
						<View
							padding="$4"
							backgroundColor="$color.gray1Light"
							borderRadius="$4"
						>
							<SizableText size="$8">{todayDailyCost.toFixed(2)} €</SizableText>
						</View>
					</View>
					<View gap="$2">
						<SizableText>Gepartes Geld pro Jahr:</SizableText>
						<View
							padding="$4"
							backgroundColor="$color.gray1Light"
							borderRadius="$4"
						>
							<SizableText size="$8">{yearlyCost.toFixed(2)} €</SizableText>
						</View>
					</View>
					<View gap="$2">
						<SizableText>Gepartes Geld in 6 Jahren:</SizableText>
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
				</View>
			</OnboardingPage>
		</ScrollableScreen>
	);
}
