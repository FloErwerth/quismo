import { router } from "expo-router";
import { ScrollableScreen } from "@/components/Screens/ScrollableScreen";
import { OnboardingInput } from "@/Screens/Onboarding/components/OnboardingInput";
import { OnboardingPage } from "@/Screens/Onboarding/components/OnboardingPage";
import { STORAGE_KEYS, useStoreNumber } from "@/storage";

export default function SmokingPage2() {
	const [cigarettesPerBox, setCigarettesPerBox] = useStoreNumber(
		STORAGE_KEYS.CIGARETTES_PER_BOX,
	);

	return (
		<ScrollableScreen flex={1}>
			<OnboardingPage
				nextButtonDisabled={cigarettesPerBox === undefined}
				onNext={() => router.push("/onboarding/pricePerBoxPage")}
				title="Wie viele Zigaretten sind in einer Schachtel?"
			>
				<OnboardingInput
					label="Anzahl Zigaretten pro Schachtel"
					subLabel="Das hilft uns dabei deine finanziellen Einsparungen zu berechnen"
					value={cigarettesPerBox?.toString()}
					onChangeText={(text: string) => setCigarettesPerBox(text)}
					maxLength={3}
					keyboardType="number-pad"
				/>
			</OnboardingPage>
		</ScrollableScreen>
	);
}
