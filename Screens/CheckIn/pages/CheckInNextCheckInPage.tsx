import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { SizableText, View } from "tamagui";
import { StepperPage } from "@/components/Stepper/StepperPage";
import { CheckInSmoked } from "@/config/checkin";
import { useCurrentCheckIn } from "@/Screens/CheckIn/hooks/useCurrentCheckIn";

export const CheckInNextCheckInPage = () => {
	const { t } = useTranslation();
	const { checkIn } = useCurrentCheckIn();

	const didSmoke = checkIn?.didSmoke === CheckInSmoked.SMOKED;

	return (
		<StepperPage
			nextButtonText={`${t("checkIn.done")} ${didSmoke ? "👏" : "👍"}`}
			onNext={() => {
				router.navigate("..");
			}}
			bubbleTextConfig={{
				imageConfig: {
					source: didSmoke
						? require("@/assets/images/smoqui_motivation.png")
						: require("@/assets/images/smoqui_thumbs_up.png"),
					width: 150,
					height: 120,
				},
				arrowPosition: "right",
				arrowTopPercentage: 30,
				text: didSmoke
					? t("checkIn.nextCheckIn.smoked.title")
					: t("checkIn.nextCheckIn.notSmoked.title"),
			}}
		>
			<View gap="$4">
				<SizableText size="$6">
					{didSmoke
						? t("checkIn.nextCheckIn.smoked.description")
						: t("checkIn.nextCheckIn.notSmoked.description")}
				</SizableText>
				{didSmoke && (
					<SizableText size="$6">
						{t("checkIn.nextCheckIn.smoked.regressionPositive")}
					</SizableText>
				)}
			</View>
		</StepperPage>
	);
};
