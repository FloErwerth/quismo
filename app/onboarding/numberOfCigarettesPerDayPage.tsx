import { router } from "expo-router";
import { SizableText, View } from "tamagui";
import { ScrollableScreen } from "@/components/Screens/ScrollableScreen";
import { OnboardingInput } from "@/Screens/Onboarding/components/OnboardingInput";
import { OnboardingPage } from "@/Screens/Onboarding/components/OnboardingPage";
import { STORAGE_KEYS, useStoreNumber } from "@/storage";

const getAddictionSeverity = (cigarettesPerDay?: number) => {
	if (cigarettesPerDay === undefined) {
		return "Unbekannt";
	}
	if (cigarettesPerDay >= 0 && cigarettesPerDay <= 5) {
		return "Geringe Sucht";
	}
	if (cigarettesPerDay >= 6 && cigarettesPerDay <= 10) {
		return "Leichte Sucht";
	}
	if (cigarettesPerDay >= 11 && cigarettesPerDay <= 20) {
		return "Mittlere Sucht";
	}
	if (cigarettesPerDay >= 21 && cigarettesPerDay <= 30) {
		return "Starke Sucht";
	}
	if (cigarettesPerDay >= 31) {
		return "Sehr Starke Sucht";
	}
};

export default function NumberOfCigarettesPerDayPage() {
	const [averageCigarettesSmokedPerDay, setAverageCigarettesSmokedPerDay] =
		useStoreNumber(STORAGE_KEYS.AVERAGE_CIGARETTES_SMOKED_PER_DAY);

	return (
		<ScrollableScreen flex={1}>
			<OnboardingPage
				nextButtonDisabled={averageCigarettesSmokedPerDay === undefined}
				onNext={() => router.push("/onboarding/numberOfCigarettesPerBoxPage")}
				title="Wie viele Zigaretten rauchst Du pro Tag?"
			>
				<OnboardingInput
					label="Anzahl Zigaretten pro Tag"
					subLabel="Das hilft uns dabei die Stärke deiner Sucht einzuschätzen"
					value={averageCigarettesSmokedPerDay?.toString()}
					maxLength={3}
					keyboardType="number-pad"
					onChangeText={(text: string) => {
						setAverageCigarettesSmokedPerDay(text);
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
							{getAddictionSeverity(averageCigarettesSmokedPerDay)}
						</SizableText>
					</View>
				)}
			</OnboardingPage>
		</ScrollableScreen>
	);
}
