import { Image } from "expo-image";
import { useTranslation } from "react-i18next";
import { SizableText, View } from "tamagui";
import { StepperPage } from "@/components/Stepper/StepperPage";
import { Card } from "@/components/tamagui/Card";
import { currencySymbols } from "@/config/currencies";
import { useStoreSelector } from "@/storage/storage";

export const OnboardingSavingsPage = () => {
	const { t } = useTranslation();
	const averageCigarettesSmokedPerDay = useStoreSelector(
		(state) => state.averageCigarettesSmokedPerDay,
	);

	const currency = useStoreSelector((state) => state.currency);

	const cigarettesPerBox = useStoreSelector((state) => state.cigarettesPerBox);
	const boxPrice = useStoreSelector((state) => state.boxPrice);

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

	const yearlyCost = (todayDailyCost * 365) / 12;

	return (
		<StepperPage
			nextButtonIsLoadingButton
			nextButtonText={t("onboarding.savings.nextButtonText")}
		>
			<View gap="$2">
				<Image
					source={require("@/assets/images/smoqui_money_tongue.png")}
					style={{ width: 250, height: 185, alignSelf: "center", top: -25 }}
					contentFit="cover"
				/>
				<SizableText size="$10" textAlign="center">
					{t("onboarding.savings.title")}
				</SizableText>
				<SizableText size="$8">
					{t("onboarding.savings.description")}
				</SizableText>
			</View>
			<View gap="$2" flex={1} justifyContent="center">
				<SizableText size="$8" textAlign="center">
					{t("onboarding.savings.monthlySavings")}
				</SizableText>
				<Card
					boxShadow="inset 2px 2px 4px 0 rgba(0, 0, 0, 0.5), inset -2px -2px 4px 0 rgba(255, 255, 255, 1)"
					padding="$2"
					paddingHorizontal="$6"
					alignSelf="center"
				>
					<SizableText color="$green10Light" textAlign="center" size="$14">
						{yearlyCost.toFixed(0)} {currencySymbols[currency]}
					</SizableText>
				</Card>
			</View>
		</StepperPage>
	);
};
