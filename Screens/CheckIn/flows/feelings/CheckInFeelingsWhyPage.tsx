import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { StepperPage } from "@/components/Stepper/StepperPage";
import { Input } from "@/components/tamagui/Input";
import { useSelectableFeelings } from "@/config/checkin";
import { useCurrentCheckIn } from "@/Screens/CheckIn/hooks/useCurrentCheckIn";
import { useStoreSelector } from "@/storage/storage";

export const CheckInFeelingsWhyPage = () => {
	const { t } = useTranslation();
	const { checkIn, timestamp } = useCurrentCheckIn();
	const updateCheckIn = useStoreSelector((state) => state.updateCheckIn);
	const selectableFeelings = useSelectableFeelings();

	const selectedFeeling = selectableFeelings.find(
		(feeling) => feeling.value === checkIn?.feelings,
	);

	const [reasonText, setReasonText] = useState(checkIn?.feelingsReason || "");

	useEffect(() => {
		// Save the reason text whenever it changes
		if (reasonText !== checkIn?.feelingsReason) {
			updateCheckIn(timestamp, {
				feelingsReason: reasonText,
			});
		}
	}, [reasonText, timestamp, updateCheckIn, checkIn?.feelingsReason]);

	const feelingLabel = selectedFeeling?.label.toLowerCase() || "";

	return (
		<StepperPage
			bubbleTextConfig={{
				imageConfig: {
					source: require("@/assets/images/smoqui_note.png"),
					width: 150,
					height: 100,
				},
				arrowPosition: "right",
				arrowTopPercentage: 30,
				text: t("checkIn.feelings.why.title", {
					feeling: feelingLabel,
				}),
			}}
			skipButtonText={t("checkIn.feelings.why.skipButtonText")}
			showSkipButton
			onSkip={() => {
				updateCheckIn(timestamp, {
					feelingsReason: "",
				});
			}}
		>
			<Input
				multiline
				numberOfLines={6}
				autoFocus
				verticalAlign="top"
				size="$6"
				value={reasonText}
				onChangeText={setReasonText}
				placeholder={t("checkIn.feelings.why.placeholder")}
			/>
		</StepperPage>
	);
};
