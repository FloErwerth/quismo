import { useTranslation } from "react-i18next";
import { Image, SizableText, View } from "tamagui";
import { StepperPage } from "@/components/Stepper/StepperPage";

export const OnboardingSmokingBehaviourPreperationPage = () => {
	const { t } = useTranslation();
	return (
		<StepperPage nextButtonText="Ich bin bereit!">
			<View>
				<Image
					left={3}
					width="100%"
					height={280}
					source={require("@/assets/images/smoqui_sign.png")}
				/>
				<SizableText
					top={55}
					rotate="-2.5deg"
					alignSelf="center"
					position="absolute"
					size="$7"
				>
					{t("onboarding.smokingBehaviourPreperation.title")}
				</SizableText>
			</View>
			<SizableText size="$8">
				{t("onboarding.smokingBehaviourPreperation.description")}
			</SizableText>
			<SizableText size="$8">
				{t("onboarding.smokingBehaviourPreperation.hint")}
			</SizableText>
		</StepperPage>
	);
};
