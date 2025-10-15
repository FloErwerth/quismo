import { router } from "expo-router";
import { View } from "tamagui";
import { ScrollableScreen } from "@/components/Screens/ScrollableScreen";
import { OnboardingInput } from "@/Screens/Onboarding/components/OnboardingInput";
import { OnboardingPage } from "@/Screens/Onboarding/components/OnboardingPage";
import { STORAGE_KEYS, useStoreString } from "@/storage";

export const PersonalData = () => {
	const [name, setName] = useStoreString(STORAGE_KEYS.NAME);

	const navigateToNumberOfCigarettesPerDayPage = () => {
		if (!name) {
			return;
		}
		router.push("/onboarding/numberOfCigarettesPerDayPage");
	};

	return (
		<ScrollableScreen flex={1}>
			<View gap="$6" flex={1}>
				<OnboardingPage
					nextButtonDisabled={!name}
					onNext={navigateToNumberOfCigarettesPerDayPage}
					title="Wie möchtest Du genannt werden?"
				>
					<OnboardingInput
						label="Name"
						subLabel="Wir verwenden diese Information, um die App persönlicher zu gestalten. Alle gesammelten Informationen werden nicht an Dritte weitergegeben."
						value={name}
						onChangeText={setName}
					/>
				</OnboardingPage>
			</View>
		</ScrollableScreen>
	);
};
