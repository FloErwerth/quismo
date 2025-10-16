import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { SizableText, View, XStack } from "tamagui";
import z from "zod";
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

const boxPriceSchema = z
	.number()
	.min(0)
	.max(1000)
	.refine((number) => {
		if (number === 0) {
			return undefined;
		}
		return number;
	});

export const OnboardingPricePerBoxPage = () => {
	const { t } = useTranslation();
	const boxPrice = useStore((state) => state.boxPrice);
	const updateBoxPrice = useStore((state) => state.updateBoxPrice);
	const currency = useStore((state) => state.currency);
	const updateCurrency = useStore((state) => state.updateCurrency);

	const handleChangeBoxPrice = (text: string) => {
		const result = boxPriceSchema.safeParse(Number(text));
		if (!result.success) {
			updateBoxPrice(undefined);
			return;
		}
		updateBoxPrice(result.data);
	};

	return (
		<ScrollableScreen flex={1} keyboardShouldPersistTaps="never">
			<OnboardingPage
				onNext={() => router.push("/onboarding/startJourney")}
				nextButtonDisabled={
					!boxPriceSchema.safeParse(boxPrice).success || currency === undefined
				}
				title={t("onboarding.price.title")}
				currentPage={4}
			>
				<XStack gap="$2">
					<View gap="$2" flex={1}>
						<OnboardingInput
							onChangeText={handleChangeBoxPrice}
							value={boxPrice?.toString()}
							label={t("onboarding.price.amountLabel")}
							keyboardType="decimal-pad"
							maxLength={4}
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
		</ScrollableScreen>
	);
};
