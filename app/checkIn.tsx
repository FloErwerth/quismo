import { Image } from "expo-image";
import { useWindowDimensions } from "react-native";
import { AnimatePresence, SizableText, View, XStack } from "tamagui";
import { GradientBackground } from "@/components/Backgrounds/GradientBackground";
import { ScrollableScreen } from "@/components/Screens/ScrollableScreen";
import { TextBubble } from "@/components/TextBubble";
import { Button } from "@/components/tamagui/Button";
import { useStoreSelector } from "@/storage/storage";

const FirstCheckIn = () => {
	const updateHasSeenCheckInIntroduction = useStoreSelector(
		(state) => state.updateHasSeenCheckInIntroduction,
	);
	const { height } = useWindowDimensions();

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
						text="Willkommen zu deinem ersten Check-In!"
						arrowTopPercentage={30}
						arrowPosition="left"
					/>
				</XStack>
				<View gap="$4">
					<SizableText size="$8">
						Bei einem Check-In wird dein aktueller Rauchstatus, deine
						Gefühlslage und deine Zuversicht abgefragt.
					</SizableText>
					<SizableText size="$8">
						Dies dient der Selbstreflextion und Hilft Dir beim Rauchstopp
					</SizableText>
					<SizableText size="$8">
						Deine Check-Ins kannst Du in deinem Kalender aufrufen und die
						Auswertung ansehen.
					</SizableText>
				</View>
				<View flex={1} />
				<Button
					size="$8"
					onPress={() => {
						updateHasSeenCheckInIntroduction(true);
					}}
				>
					Check-In starten
				</Button>
			</ScrollableScreen>
		</View>
	);
};

export default function CheckIn() {
	const hasSeenCheckInIntroduction = useStoreSelector(
		(state) => state.hasSeenCheckInIntroduction,
	);

	console.log(useStoreSelector((state) => state.checkIns));

	return (
		<GradientBackground>
			<AnimatePresence>
				{!hasSeenCheckInIntroduction && <FirstCheckIn />}
			</AnimatePresence>
		</GradientBackground>
	);
}
