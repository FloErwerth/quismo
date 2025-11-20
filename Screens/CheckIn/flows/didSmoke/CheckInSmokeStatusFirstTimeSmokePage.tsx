import { t } from "i18next";
import { Image, SizableText, XStack } from "tamagui";
import { StepperPage } from "@/components/Stepper/StepperPage";
import { TextBubble } from "@/components/TextBubble";
import { CheckInSmoked } from "@/config/checkin";
import { useCheckIns } from "@/Screens/CheckIn/hooks/useCurrentCheckIn";

export const CheckInSmokeStatusFirstTimeSmokePage = () => {
	const checkIns = useCheckIns();
	const checkInArray = Object.values(checkIns);

	const firstTimeSmoked =
		checkInArray.length <= 1 ||
		checkInArray.some((checkIn) => checkIn.didSmoke === CheckInSmoked.SMOKED);

	if (!firstTimeSmoked) {
		return null;
	}

	return (
		<StepperPage>
			<XStack>
				<Image
					width={150}
					height={150}
					source={require("@/assets/images/smoqui_motivation.png")}
				/>
				<TextBubble
					text="Rückfälle sind normal!"
					arrowTopPercentage={50}
					arrowPosition="left"
				/>
			</XStack>
			<SizableText size="$6">
				{t("checkIn.smokeStatusResult.yes.motivation.description")}
			</SizableText>
			<SizableText size="$6">
				{t("checkIn.smokeStatusResult.yes.motivation.description2")}
			</SizableText>
			<SizableText size="$6">
				{t("checkIn.smokeStatusResult.yes.motivation.description3")}
			</SizableText>
		</StepperPage>
	);
};
