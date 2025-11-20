import { Image } from "expo-image";
import { useTranslation } from "react-i18next";
import { SizableText, useWindowDimensions, View } from "tamagui";
import { StepperPage } from "@/components/Stepper/StepperPage";

export const CheckInDidNotSmokeCongratulate = () => {
	const { t } = useTranslation();
	const { width } = useWindowDimensions();

	return (
		<StepperPage>
			<Image
				style={{
					alignSelf: "center",
					width: width * 0.5,
					height: width * 0.3,
				}}
				source={require("@/assets/images/smoqui_cheer.png")}
			/>
			<View gap="$4">
				<SizableText textAlign="center" size="$8">
					{t("checkIn.didNotSmoke.congratulate.title")}
				</SizableText>
				<SizableText size="$6">
					{t("checkIn.didNotSmoke.congratulate.description")}
				</SizableText>
				<SizableText size="$6">
					{t("checkIn.didNotSmoke.congratulate.motivation")}
				</SizableText>
			</View>
		</StepperPage>
	);
};
