import { useTranslation } from "react-i18next";
import { Circle, Image, SizableText, View, XStack } from "tamagui";
import { StepperPage } from "@/components/Stepper/StepperPage";
import { TextBubble } from "@/components/TextBubble";
import { useStoreSelector } from "@/storage/storage";

export const OnboardingGoodHandsPage = () => {
	const name = useStoreSelector((state) => state.name);
	const { t } = useTranslation();

	return (
		<StepperPage key="some">
			<XStack>
				<Image
					width={150}
					height={150}
					source={require("@/assets/images/smoqui_thumbs_up.png")}
				/>
				<TextBubble
					text={t("onboarding.goodHands.title", { name })}
					arrowTopPercentage={60}
					arrowPosition="left"
				/>
			</XStack>
			<View flex={1} justifyContent="space-evenly">
				<XStack gap="$4" alignItems="center">
					<Circle size={16} backgroundColor="$blue10Light" />
					<SizableText flex={1} size="$8">
						{t("onboarding.goodHands.description1")}
					</SizableText>
				</XStack>
				<XStack gap="$4" alignItems="center">
					<Circle size={16} backgroundColor="$blue10Light" />
					<SizableText flex={1} size="$8">
						{t("onboarding.goodHands.description2")}
					</SizableText>
				</XStack>
				<XStack gap="$4" alignItems="center">
					<Circle size="$1" backgroundColor="$blue10Light" />
					<SizableText flex={1} size="$8">
						{t("onboarding.goodHands.description3")}
					</SizableText>
				</XStack>
			</View>
		</StepperPage>
	);
};
