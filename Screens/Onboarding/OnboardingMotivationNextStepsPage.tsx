import { useTranslation } from "react-i18next";
import { Image, SizableText, XStack } from "tamagui";
import { FloatingView } from "@/components/FloatingView";
import { StepperPage } from "@/components/Stepper/StepperPage";
import { TextBubble } from "@/components/TextBubble";

export const OnboardingMotivationNextStepsPage = () => {
	const { t } = useTranslation();
	return (
		<StepperPage nextButtonText="Los geht's!">
			<FloatingView showShadow={false}>
				<XStack alignItems="center" justifyContent="center">
					<Image
						width={150}
						height={150}
						source={require("@/assets/images/smoqui_statistics.png")}
					/>
					<TextBubble
						arrowTopPercentage={40}
						size="$8"
						arrowPosition="left"
						text="Der letzte Schritt, aber der wichtigste!"
					/>
				</XStack>
			</FloatingView>
			<SizableText size="$8">
				{t("onboarding.motivationNextSteps.title")}
			</SizableText>
			<SizableText size="$8">
				{t("onboarding.motivationNextSteps.description")}
			</SizableText>
		</StepperPage>
	);
};
