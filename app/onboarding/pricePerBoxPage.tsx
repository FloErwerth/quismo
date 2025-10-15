import { router } from "expo-router";
import { SizableText, View, XStack } from "tamagui";
import { ScrollableScreen } from "@/components/Screens/ScrollableScreen";
import { Select } from "@/components/tamagui/Select";
import {
	type Currency,
	currencies,
	currenciesArray,
} from "@/config/currencies";
import { OnboardingInput } from "@/Screens/Onboarding/components/OnboardingInput";
import { OnboardingPage } from "@/Screens/Onboarding/components/OnboardingPage";
import { useStore } from "@/storage";

export default function SmokingPage3() {
	const boxPrice = useStore((state) => state.boxPrice);
	const updateBoxPrice = useStore((state) => state.updateBoxPrice);
	const currency = useStore((state) => state.currency);
	const updateCurrency = useStore((state) => state.updateCurrency);

	return (
		<ScrollableScreen flex={1} keyboardShouldPersistTaps="never">
			<OnboardingPage
				onNext={() => router.push("/onboarding/time")}
				nextButtonDisabled={boxPrice === undefined || currency === undefined}
				title="Wie viel Kostet eine Schachtel Zigaretten?"
			>
				<XStack gap="$2">
					<View gap="$2" flex={1}>
						<OnboardingInput
							onChangeText={updateBoxPrice}
							value={boxPrice?.toString()}
							label="Betrag"
							keyboardType="decimal-pad"
							maxLength={4}
						/>
					</View>
					<View gap="$2" flex={1}>
						<SizableText size="$5">Währung</SizableText>
						<Select<Currency[]>
							sheetTitle="Währung wählen"
							placeholder="Währung wählen"
							selectedItem={currency as Currency}
							labelMap={currencies}
							onSelectionChange={updateCurrency}
							items={currenciesArray}
						/>
					</View>
				</XStack>
				<SizableText size="$5" color="$color.gray9Light">
					Es reicht, wenn Du einen ungefähren Wert eingibst. Dieser Wert wird
					dafür verwendet, um Deine Ersparnisse zu berechnen.
				</SizableText>
			</OnboardingPage>
		</ScrollableScreen>
	);
}
