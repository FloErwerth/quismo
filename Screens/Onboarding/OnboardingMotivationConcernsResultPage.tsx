import { Check } from "@tamagui/lucide-icons";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Purchases, {
	PACKAGE_TYPE,
	type PurchasesOfferings,
	type PurchasesPackage,
} from "react-native-purchases";
import { Circle, SizableText, View, XStack } from "tamagui";
import { FloatingView } from "@/components/FloatingView";
import { StepperPage } from "@/components/Stepper/StepperPage";
import { Card } from "@/components/tamagui/Card";
import { useLeaveOnboarding } from "@/Screens/Onboarding/useLeaveOnboarding";
import { useStoreSelector } from "@/storage/storage";

const useOfferings = () => {
	const [offerings, setOfferings] = useState<PurchasesOfferings>();

	useEffect(() => {
		Purchases.getOfferings().then(setOfferings);
	}, []);

	const purchageOffering = async (pkg: PurchasesPackage) => {
		await Purchases.purchasePackage(pkg);
	};

	return { offerings, purchageOffering };
};

export const OnboardingPaywall = () => {
	const leaveOnboarding = useLeaveOnboarding();
	const { offerings, purchageOffering } = useOfferings();
	const [selectedPackage, setSelectedPackage] = useState<PurchasesPackage>();

	const weekly = offerings?.current?.availablePackages.find(
		(pkg) => pkg.packageType === PACKAGE_TYPE.MONTHLY,
	);

	const yearly = offerings?.current?.availablePackages.find(
		(pkg) => pkg.packageType === PACKAGE_TYPE.ANNUAL,
	);

	useEffect(() => {
		if (yearly) {
			setSelectedPackage(yearly);
		}
	}, [yearly]);

	const motivation = useStoreSelector((state) => state.motivation);
	const { t } = useTranslation();

	if (motivation === undefined) {
		return <Redirect href=".." />;
	}

	const handleSelectPackage = (packageType?: PACKAGE_TYPE) => {
		if (
			selectedPackage !== undefined &&
			selectedPackage.packageType === packageType
		) {
			setSelectedPackage(undefined);
			return;
		}
		if (packageType === PACKAGE_TYPE.ANNUAL) {
			setSelectedPackage(yearly);
			return;
		}
		if (packageType === PACKAGE_TYPE.MONTHLY) {
			setSelectedPackage(weekly);
			return;
		}
	};
	return (
		<StepperPage
			nextButtonText={
				selectedPackage
					? t("onboarding.concernsResult.subscribeButton")
					: t("onboarding.concernsResult.continueWithoutSubscriptionButton")
			}
			onNext={async () => {
				if (selectedPackage) {
					await purchageOffering(selectedPackage);
				}
				leaveOnboarding();
			}}
			bubbleTextConfig={{
				imageConfig: {
					source: require("@/assets/images/smoqui_thumbs_up.png"),
					width: 150,
					height: 150,
				},
				arrowTopPercentage: 40,
				arrowPosition: "right",
				text: t("onboarding.concernsResult.title"),
			}}
		>
			<SizableText size="$6">
				{t("onboarding.concernsResult.description")}
			</SizableText>
			<SizableText size="$6">
				{t("onboarding.concernsResult.description2")}
			</SizableText>
			<View gap="$2">
				<XStack alignItems="center" gap="$4">
					<Circle size="$0.75" backgroundColor="$blue10Light" />
					<SizableText flex={1} size="$6">
						{t("onboarding.concernsResult.description3")}
					</SizableText>
				</XStack>
				<XStack alignItems="center" gap="$4">
					<Circle size="$0.75" backgroundColor="$blue10Light" />
					<SizableText flex={1} size="$6">
						{t("onboarding.concernsResult.description4")}
					</SizableText>
				</XStack>
			</View>
			<View gap="$2">
				<SizableText size="$6">
					{t("onboarding.concernsResult.description5")}
				</SizableText>
				<FloatingView showShadow={false}>
					<Card
						borderRadius="$8"
						onPress={() => handleSelectPackage(weekly?.packageType)}
						padding="$4"
						borderWidth={"$1.5"}
						borderColor={
							selectedPackage?.packageType === weekly?.packageType
								? "$blue10Light"
								: "$blue6Light"
						}
						animation="quick"
					>
						{selectedPackage?.packageType === weekly?.packageType && (
							<View
								animation="quick"
								enterStyle={{ opacity: 0 }}
								exitStyle={{ opacity: 0 }}
								position="absolute"
								right="$2"
								top="$2"
								backgroundColor="$green8Light"
								borderRadius="$12"
								padding="$2"
							>
								<Check size="$1" color="white" />
							</View>
						)}
						<SizableText size="$6">{weekly?.product.title}</SizableText>
						<SizableText size="$8">
							{t("onboarding.concernsResult.pricePerWeek", {
								price: weekly?.product.priceString,
							})}
						</SizableText>
					</Card>
				</FloatingView>
				<FloatingView showShadow={false}>
					<Card
						borderRadius="$8"
						onPress={() => handleSelectPackage(yearly?.packageType)}
						borderWidth="$1.5"
						borderColor={
							selectedPackage?.packageType === yearly?.packageType
								? "$blue10Light"
								: "$blue6Light"
						}
						padding="$4"
						animation="quick"
					>
						<View
							borderRadius="$12"
							padding="$2"
							position="absolute"
							backgroundColor="$blue10Light"
							right="$2"
							bottom="$2"
							alignSelf="center"
						>
							<SizableText
								size="$4"
								fontWeight="bold"
								color="white"
								textAlign="center"
							>
								{t("onboarding.concernsResult.bestOffer")}
							</SizableText>
						</View>
						<XStack justifyContent="space-between">
							<SizableText size="$6">{yearly?.product.title}</SizableText>
						</XStack>
						{selectedPackage?.packageType === yearly?.packageType && (
							<View
								animation="quick"
								enterStyle={{ opacity: 0 }}
								exitStyle={{ opacity: 0 }}
								position="absolute"
								right="$2"
								top="$2"
								backgroundColor="$green8Light"
								borderRadius="$12"
								padding="$2"
							>
								<Check size="$1" color="white" />
							</View>
						)}

						<SizableText size="$8">
							{t("onboarding.concernsResult.pricePerWeek", {
								price: yearly?.product.priceString,
							})}
						</SizableText>
						<SizableText size="$3">
							{t("onboarding.concernsResult.pricePerYear", {
								price: yearly?.product.priceString,
							})}
						</SizableText>
					</Card>
				</FloatingView>
			</View>
		</StepperPage>
	);
};
