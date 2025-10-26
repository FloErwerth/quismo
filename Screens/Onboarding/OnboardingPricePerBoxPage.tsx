import { useTranslation } from "react-i18next";
import { SizableText, View, XStack } from "tamagui";
import { Select } from "@/components/tamagui/Select";
import {
	type Currency,
	currencies,
	currenciesArray,
} from "@/config/currencies";
import { OnboardingInput } from "@/Screens/Onboarding/components/OnboardingInput";
import { OnboardingPage } from "@/Screens/Onboarding/components/OnboardingPage";
import { useStore } from "@/storage/storage";

export const OnboardingPricePerBoxPage = () => {
	const { t } = useTranslation();
	const boxPrice = useStore((state) => state.boxPrice);
	const updateBoxPrice = useStore((state) => state.updateBoxPrice);
	const currency = useStore((state) => state.currency);
	const updateCurrency = useStore((state) => state.updateCurrency);

	return (
		<OnboardingPage
			nextButtonDisabled={
				boxPrice === undefined ||
				Number.isNaN(Number(boxPrice)) ||
				currency === undefined
			}
			title={t("onboarding.price.title")}
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
					<SizableText size="$5">
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
			<SizableText size="$5" color="$color.gray9Light">
				{t("onboarding.price.hint")}
			</SizableText>
		</OnboardingPage>
	);
};
