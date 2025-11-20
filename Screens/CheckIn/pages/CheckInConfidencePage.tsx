import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SizableText, View } from "tamagui";
import Slider from "@/components/Slider";
import { StepperPage } from "@/components/Stepper/StepperPage";
import { useCurrentCheckIn } from "@/Screens/CheckIn/hooks/useCurrentCheckIn";
import { useStoreSelector } from "@/storage/storage";

export const CheckInConfidencePage = () => {
	const { t } = useTranslation();
	const { checkIn, timestamp } = useCurrentCheckIn();
	const updateCheckIn = useStoreSelector((state) => state.updateCheckIn);

	const [confidence, setConfidence] = useState(checkIn?.confidence || 50);

	return (
		<StepperPage
			onSkip={() => {
				updateCheckIn(timestamp, {
					confidence: confidence,
				});
			}}
			bubbleTextConfig={{
				imageConfig: {
					source: require("@/assets/images/smoqui_note.png"),
					width: 150,
					height: 100,
				},
				arrowPosition: "right",
				arrowTopPercentage: 30,
				text: t("checkIn.confidence.title"),
			}}
		>
			<SizableText size="$6">{t("checkIn.confidence.description")}</SizableText>
			<View flex={1} justifyContent="center" alignItems="center">
				<Slider
					onValueChange={setConfidence}
					maxValue={100}
					initialValue={confidence}
					label={t("checkIn.confidence.label")}
				/>
			</View>
		</StepperPage>
	);
};
