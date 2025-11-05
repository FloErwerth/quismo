import { type PropsWithChildren, useState } from "react";
import { StyleSheet } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";
import { View } from "tamagui";

type SliderButtonProps = {
	title: string;
	onEndReached: () => void;
};

export const Slide = ({
	onLayoutMeasured,
	children,
}: Pick<SliderButtonProps, "title"> &
	PropsWithChildren & { onLayoutMeasured: (width: number) => void }) => {
	return (
		<View
			onLayout={(e) =>
				onLayoutMeasured(parseInt(e.nativeEvent.layout.width.toFixed(0), 10))
			}
			overflow="hidden"
			padding="$3"
			paddingHorizontal={6}
			backgroundColor="$blue6Light"
			alignItems="center"
			borderRadius="$12"
			justifyContent="center"
		>
			{children}
		</View>
	);
};

export const SliderButton = ({ title, onEndReached }: SliderButtonProps) => {
	const [slideWidth, setSlideWidth] = useState(0);
	const position = useSharedValue(0);
	const endPosition = slideWidth - 44;
	const scale = useSharedValue(1);
	const elevation = useSharedValue(0);

	const triggerPosition = endPosition * 0.85;
	const panGesture = Gesture.Pan()
		.onTouchesDown(() => {
			scale.value = withTiming(1.1, { duration: 100 });
			elevation.value = withTiming(5, { duration: 100 });
		})
		.onTouchesUp(() => {
			scale.value = withTiming(1, { duration: 100 });
			elevation.value = withTiming(0, { duration: 100 });
		})
		.onChange((e) => {
			if (e.translationX <= 0) {
				return;
			}
			if (e.translationX >= endPosition) {
				return;
			}
			position.value = e.translationX;
		})
		.onEnd((e) => {
			if (e.translationX >= triggerPosition) {
				position.value = withTiming(endPosition, { duration: 100 });
				scheduleOnRN(onEndReached);
				return;
			}
			position.value = withTiming(0, { duration: 100 });
		});

	const animatedStyle = useAnimatedStyle(() => ({
		transform: [{ translateX: position.value }, { scale: scale.value }],
		elevation: elevation.value,
	}));

	const textAnimatedStyle1 = useAnimatedStyle(() => ({
		color: "black",
		left: position.value,
	}));
	const textAnimatedStyle2 = useAnimatedStyle(() => ({
		color: "black",
		left: position.value - slideWidth / 2,
		position: "absolute",
	}));

	return (
		<Slide onLayoutMeasured={setSlideWidth} title={title}>
			<GestureDetector gesture={panGesture}>
				<Animated.View style={[styles.box, animatedStyle]} />
			</GestureDetector>
			<Animated.Text style={textAnimatedStyle1}>{title}</Animated.Text>
			<Animated.Text style={textAnimatedStyle2}>Loslassen</Animated.Text>
		</Slide>
	);
};

const styles = StyleSheet.create({
	box: {
		position: "absolute",
		top: 4,
		left: 6,
		height: 32,
		width: 32,
		backgroundColor: "#b58df1",
		borderRadius: "100%",
		marginBottom: 30,
	},
});
