import { useTranslation } from "react-i18next";
import { XStack } from "tamagui";
import { StepperPage } from "@/components/Stepper/StepperPage";
import { SelectableCard } from "@/components/tamagui/Card/variants";
import { CheckInSmoked } from "@/config/checkin";
import {
	useCurrentCheckIn,
	usePreviousCheckIn,
} from "@/Screens/CheckIn/hooks/useCurrentCheckIn";
import { useStoreSelector } from "@/storage/storage";

export const CheckInSmokeStatusPage = () => {
	const { timestamp, checkIn } = useCurrentCheckIn();
	const previousCheckIn = usePreviousCheckIn(timestamp);
	const updateCheckIn = useStoreSelector((state) => state.updateCheckIn);

	const handleSmokeStatus = (didSmoke: CheckInSmoked) => {
		updateCheckIn(timestamp, {
			didSmoke,
		});
	};

	const { t } = useTranslation();
	return (
		<StepperPage
			bubbleTextConfig={{
				imageConfig: {
					source: require("@/assets/images/smoqui_note.png"),
					width: 150,
					height: 100,
				},
				arrowPosition: "right",
				arrowTopPercentage: previousCheckIn ? 25 : 50,

				text: previousCheckIn
					? t("checkIn.smokeStatus.sinceLastCheckInTitle")
					: t("checkIn.smokeStatus.title"),
			}}
		>
			<XStack flexDirection="row" gap="$2">
				<SelectableCard
					onPress={() => handleSmokeStatus(CheckInSmoked.SMOKED)}
					selected={checkIn?.didSmoke === CheckInSmoked.SMOKED}
					title={t("checkIn.smokeStatus.yesTitle")}
					description={t("checkIn.smokeStatus.yesDescription")}
					flex={1}
				/>
				<SelectableCard
					onPress={() => handleSmokeStatus(CheckInSmoked.NOT_SMOKED)}
					selected={checkIn?.didSmoke === CheckInSmoked.NOT_SMOKED}
					title={t("checkIn.smokeStatus.noTitle")}
					description={t("checkIn.smokeStatus.noDescription")}
					flex={1}
				/>
			</XStack>
		</StepperPage>
	);
};
