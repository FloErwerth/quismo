import { useTranslation } from "react-i18next";
import { StepperPage } from "@/components/Stepper/StepperPage";
import { Input } from "@/components/tamagui/Input";
import { useCurrentCheckIn } from "@/Screens/CheckIn/hooks/useCurrentCheckIn";
import { useStoreSelector } from "@/storage/storage";

export const CheckInDidSmokeExplainReasonPage = () => {
	const { t } = useTranslation();
	const {
		checkIn: { smokedReasonType },
		timestamp,
	} = useCurrentCheckIn();
	const updateCheckIn = useStoreSelector((state) => state.updateCheckIn);

	const reasonText = t(
		`checkIn.smokeStatusResult.yes.reasons.${smokedReasonType}`,
	);

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
				text: t(`checkIn.smokeStatusResult.yes.explainReason.title`, {
					reason: reasonText,
				}),
			}}
			skipButtonText={t(
				"checkIn.smokeStatusResult.yes.explainReason.skipButtonText",
			)}
			showSkipButton
			onSkip={() => {
				updateCheckIn(timestamp, {
					smokedReasonText: "",
				});
			}}
		>
			<Input
				multiline
				numberOfLines={6}
				autoFocus
				verticalAlign="top"
				size="$6"
				placeholder={t(
					"checkIn.smokeStatusResult.yes.explainReason.placeholder",
				)}
			/>
		</StepperPage>
	);
};
