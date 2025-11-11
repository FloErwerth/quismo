import { useTranslation } from "react-i18next";
import { SizableText, View, XStack } from "tamagui";
import { StepperPage } from "@/components/Stepper/StepperPage";
import { Select } from "@/components/tamagui/Select";
import {
	type Currency,
	currencies,
	currenciesArray,
} from "@/config/currencies";
import { OnboardingInput } from "@/Screens/Onboarding/components/OnboardingInput";
import { useStoreSelector } from "@/storage/storage";

export const OnboardingPricePerBoxPage = () => {
	const { t } = useTranslation();
	const boxPrice = useStoreSelector((state) => state.boxPrice);
	const updateBoxPrice = useStoreSelector((state) => state.updateBoxPrice);
	const currency = useStoreSelector((state) => state.currency);
	const updateCurrency = useStoreSelector((state) => state.updateCurrency);

	return (
		<StepperPage
			nextButtonDisabled={
				boxPrice === undefined ||
				Number.isNaN(Number(boxPrice)) ||
				currency === undefined
			}
			bubbleTextConfig={{
				imageConfig: {
					source: require("@/assets/images/smoqui_note.png"),
					width: 150,
					height: 150,
				},
				arrowTopPercentage: 35,
				text: t("onboarding.price.title"),
			}}
		>
			<XStack gap="$2">
				<View gap="$2" flex={1}>
					<OnboardingInput
						onChangeText={updateBoxPrice}
						value={boxPrice}
						label={t("onboarding.price.amountLabel")}
						keyboardType="decimal-pad"
						maxLength={5}
					/>
				</View>
				<View gap="$2" flex={1}>
					<SizableText size="$8">
						{t("onboarding.price.currencyLabel")}
					</SizableText>
					<Select<Currency[]>
						sheetTitle={t("onboarding.price.currencySheetTitle")}
						placeholder={t("onboarding.price.currencyPlaceholder")}
						selectedItem={currency as Currency}
						labelMap={currencies}
						onSelectionChange={updateCurrency}
						items={currenciesArray}
					/>
				</View>
			</XStack>
		</StepperPage>
	);
};
