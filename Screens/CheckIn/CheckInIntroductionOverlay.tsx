import { useTranslation } from "react-i18next";
import { useWindowDimensions } from "react-native";
import { Image, SizableText, View, XStack } from "tamagui";
import { ScrollableScreen } from "@/components/Screens/ScrollableScreen";
import { TextBubble } from "@/components/TextBubble";
import { Button } from "@/components/tamagui/Button";
import { useStoreSelector } from "@/storage/storage";

export const CheckInIntroductionOverlay = () => {
	const { t } = useTranslation();
	const hasSeenCheckInIntroduction = useStoreSelector(
		(state) => state.hasSeenCheckInIntroduction,
	);
	const updateHasSeenCheckInIntroduction = useStoreSelector(
		(state) => state.updateHasSeenCheckInIntroduction,
	);
	const { height } = useWindowDimensions();

	if (hasSeenCheckInIntroduction) {
		return null;
	}

	const handleStartCheckIn = () => {
		updateHasSeenCheckInIntroduction(true);
	};

	return (
		<View
			key="first-check-in"
			zIndex={1}
			height={height}
			animation="medium"
			enterStyle={{ y: 0 }}
			exitStyle={{ y: -1000 }}
		>
			<ScrollableScreen>
				<XStack left="$-4">
					<Image
						source={require("@/assets/images/smoqui_checklist.png")}
						style={{ width: 150, height: 150 }}
					/>
					<TextBubble
						text={t("checkIn.introduction.title")}
						arrowTopPercentage={30}
						arrowPosition="left"
					/>
				</XStack>
				<View gap="$4">
					<SizableText size="$8">
						{t("checkIn.introduction.description")}
					</SizableText>
					<SizableText size="$8">
						{t("checkIn.introduction.description2")}
					</SizableText>
					<SizableText size="$8">
						{t("checkIn.introduction.description3")}
					</SizableText>
				</View>
				<View flex={1} />
				<Button size="$8" onPress={handleStartCheckIn}>
					{t("checkIn.introduction.startButton")}
				</Button>
			</ScrollableScreen>
		</View>
	);
};
