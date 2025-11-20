import { useTranslation } from "react-i18next";
import { SizableText } from "tamagui";
import { SelectableOptions } from "@/components/SelectableOptions/SelectableOptions";
import { StepperPage } from "@/components/Stepper/StepperPage";
import { useSelectableReasons } from "@/config/checkin";
import { useCurrentCheckIn } from "@/Screens/CheckIn/hooks/useCurrentCheckIn";
import { useStoreSelector } from "@/storage/storage";

export const CheckInDidSmokeSelectReasonPage = () => {
	const { t } = useTranslation();
	const updateCheckIn = useStoreSelector((state) => state.updateCheckIn);
	const { timestamp, checkIn } = useCurrentCheckIn();
	const selectableSmokedReasons = useSelectableReasons();

	return (
		<StepperPage
			bubbleTextConfig={{
				imageConfig: {
					source: require("@/assets/images/smoqui_note.png"),
					width: 150,
					height: 100,
				},
				arrowPosition: "right",
				text: t("checkIn.smokeStatusResult.yes.title"),
			}}
		>
			<SizableText size="$6">
				{t("checkIn.smokeStatusResult.yes.description")}
			</SizableText>

			<SelectableOptions
				onSelect={(value) =>
					updateCheckIn(timestamp, {
						smokedReasonType: value.value,
					})
				}
				value={checkIn?.smokedReasonType}
				items={selectableSmokedReasons}
			/>
		</StepperPage>
	);
};
