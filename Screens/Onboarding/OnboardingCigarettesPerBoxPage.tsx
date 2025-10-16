import { router } from "expo-router";
import { z } from "zod";
import { ScrollableScreen } from "@/components/Screens/ScrollableScreen";
import { OnboardingInput } from "@/Screens/Onboarding/components/OnboardingInput";
import { OnboardingPage } from "@/Screens/Onboarding/components/OnboardingPage";
import { useStore } from "@/storage";

const cigarettesPerBoxSchema = z
	.number()
	.min(0)
	.max(100)
	.refine((number) => {
		if (number === 0) {
			return undefined;
		}
		return number;
	});

export const OnboardingCigarettesPerBoxPage = () => {
	const cigarettesPerBox = useStore((state) => state.cigarettesPerBox);
	const updateCigarettesPerBox = useStore(
		(state) => state.updateCigarettesPerBox,
	);

	return (
		<ScrollableScreen flex={1}>
			<OnboardingPage
				currentPage={3}
				nextButtonDisabled={
					!cigarettesPerBoxSchema.safeParse(cigarettesPerBox).success
				}
				onNext={() => router.push("/onboarding/pricePerBoxPage")}
				title="Wie viele Zigaretten sind in einer Schachtel?"
			>
				<OnboardingInput
					label="Anzahl Zigaretten pro Schachtel"
					subLabel="Das hilft uns dabei deine finanziellen Einsparungen zu berechnen"
					value={cigarettesPerBox?.toString()}
					onChangeText={(text: string) => {
						const result = cigarettesPerBoxSchema.safeParse(Number(text));
						if (!result.success) {
							updateCigarettesPerBox(undefined);
							return;
						}
						updateCigarettesPerBox(result.data);
					}}
					maxLength={3}
					keyboardType="number-pad"
				/>
			</OnboardingPage>
		</ScrollableScreen>
	);
};
