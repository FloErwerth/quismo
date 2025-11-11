import { BellRing } from "@tamagui/lucide-icons";
import { StyleSheet } from "react-native";
import Animated, {
	interpolate,
	type SharedValue,
	useAnimatedStyle,
} from "react-native-reanimated";
import { Image, SizableText, XStack } from "tamagui";
import { StepperPage } from "@/components/Stepper/StepperPage";
import { TextBubble } from "@/components/TextBubble";
import { Button } from "@/components/tamagui/Button";

function RightAction(prog: SharedValue<number>) {
	const style = useAnimatedStyle(() => {
		return {
			// Customize animation based on swipe progress
			opacity: prog.value,
			transform: [
				{ scale: interpolate(prog.value, [0, 0.9, 1], [1, 1, 1.15]) },
			],
		};
	});
	return (
		<Animated.View style={[styles.rightAction, style]}>
			<BellRing size="$1" />
		</Animated.View>
	);
}

export const OnboardingNotificationsPage = () => {
	const onSwipeableLeftOpen = () => {
		alert("Swiped left action triggered!");
	};

	return (
		<StepperPage>
			<XStack gap="$2">
				<Image
					source={require("@/assets/images/smoqui_notifications.png")}
					width={140}
					height={110}
				/>
				<TextBubble
					text="Erinnerungen aktivieren?"
					arrowTopPercentage={50}
					arrowPosition="left"
				/>
			</XStack>
			<SizableText size="$8">
				Damit ich dich zum Beispiel an deinen Check-In erinnern kann, müsstest
				Du deine Benachrichtigungen aktivieren.
			</SizableText>
			<Button.Floating
				size="$8"
				floatingProps={{
					showShadow: false,
					width: "100%",
					doFloat: true,
					pulse: true,
				}}
			>
				<SizableText textAlign="center" size="$8">
					Aktivieren
				</SizableText>
			</Button.Floating>
		</StepperPage>
	);
};
const styles = StyleSheet.create({
	rightAction: {
		width: 50,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
	},
	swipeable: {
		height: 50,
		backgroundColor: "papayawhip",
		alignItems: "center",
		justifyContent: "center",
	},
});
