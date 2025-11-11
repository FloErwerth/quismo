import { StyleSheet } from "react-native";
import {
	Gesture,
	GestureDetector,
	TextInput,
} from "react-native-gesture-handler";
import Animated, {
	interpolate,
	useAnimatedProps,
	useAnimatedStyle,
	useSharedValue,
} from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";
import { View } from "tamagui";

const SLIDER_WIDTH = 300;
const HANDLE_WIDTH = 50;

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

type SliderProps = {
	onValueChange: (value: number) => void;
	maxValue: number;
	initialValue: number;
};

const Slider = ({
	onValueChange,
	maxValue = 100,
	initialValue = 0,
}: SliderProps) => {
	const offset = useSharedValue(0);
	const sharedValue = useSharedValue(initialValue);

	const pan = Gesture.Pan()
		.onChange((event) => {
			const interpolatedOffset = interpolate(
				offset.value,
				[0, SLIDER_WIDTH - HANDLE_WIDTH],
				[0, maxValue],
			);

			const isOffsetSmallerThanMaxValue =
				Math.abs(interpolatedOffset) <= SLIDER_WIDTH;
			const isOffsetAndChangeXSmallerOrEqualToZero =
				offset.value + event.changeX <= 0;
			const isOffsetAndChangeXGreaterThanMaxValue =
				offset.value + event.changeX >= SLIDER_WIDTH - HANDLE_WIDTH;

			if (isOffsetSmallerThanMaxValue) {
				if (isOffsetAndChangeXSmallerOrEqualToZero) {
					offset.value = 0;
				} else if (isOffsetAndChangeXGreaterThanMaxValue) {
					offset.value = SLIDER_WIDTH - HANDLE_WIDTH;
				} else {
					offset.value = offset.value + event.changeX;
				}
			}

			sharedValue.value = interpolatedOffset;
		})
		.onEnd(() => {
			scheduleOnRN(onValueChange, sharedValue.value);
		});

	const sliderStyle = useAnimatedStyle(() => {
		return {
			transform: [{ translateX: offset.value }],
		};
	});

	const animatedProps = useAnimatedProps(() => {
		return {
			text: `Zuversicht: ${Math.round(sharedValue.value)}`,
			defaultValue: `Zuversicht: ${sharedValue.value}`,
		};
	});

	return (
		<View gap="$4">
			<AnimatedTextInput
				animatedProps={animatedProps}
				style={[styles.boxWidthText]}
				editable={false}
			/>
			<View style={styles.sliderTrack}>
				<GestureDetector gesture={pan}>
					<Animated.View style={[styles.sliderHandle, sliderStyle]} />
				</GestureDetector>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	sliderTrack: {
		width: SLIDER_WIDTH,
		height: 50,
		backgroundColor: "#82cab2",
		borderRadius: 25,
		justifyContent: "center",
		padding: 5,
	},
	sliderHandle: {
		width: 40,
		height: 40,
		backgroundColor: "#f8f9ff",
		borderRadius: 20,
		position: "absolute",
		left: 5,
	},
	boxWidthText: {
		textAlign: "center",
		fontSize: 18,
	},
});

export default Slider;
