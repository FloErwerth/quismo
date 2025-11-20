import { StyleSheet } from "react-native";
import {
	Gesture,
	GestureDetector,
	TextInput,
} from "react-native-gesture-handler";
import Animated, {
	interpolate,
	interpolateColor,
	useAnimatedProps,
	useAnimatedStyle,
	useSharedValue,
} from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";
import { SizableText, useTheme, View } from "tamagui";

const SLIDER_WIDTH = 300;
const HANDLE_WIDTH = 50;

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

type SliderProps = {
	onValueChange: (value: number) => void;
	maxValue: number;
	initialValue: number;
	label?: string;
};

const Slider = ({
	onValueChange,
	maxValue = 100,
	initialValue = 0,
	label = "",
}: SliderProps) => {
	// Initialize offset based on initialValue
	const initialOffset =
		(initialValue / maxValue) * (SLIDER_WIDTH - HANDLE_WIDTH);
	const offset = useSharedValue(initialOffset);
	const sharedValue = useSharedValue(initialValue);
	const theme = useTheme();
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

	const trackStyle = useAnimatedStyle(() => {
		return {
			backgroundColor: interpolateColor(
				sharedValue.value,
				[0, maxValue * 0.7, maxValue],
				[theme.red6Light.val, theme.green8Light.val, theme.green10Light.val],
			),
		};
	});

	const animatedProps = useAnimatedProps(() => {
		const displayText = `${Math.round(sharedValue.value)}%`;
		return {
			text: displayText,
			defaultValue: displayText,
			alignSelf: "center",
			fontSize: 26,
			fontWeight: "bold",
			lineHeight: 1,
			transform: [
				{
					scale: interpolate(
						sharedValue.value,
						[0, maxValue * 0.7, maxValue],
						[0.5, 0.7, 1.2],
					),
				},
			],
		};
	});

	return (
		<View gap="$4">
			<View alignItems="center" gap="$2">
				<AnimatedTextInput
					animatedProps={animatedProps}
					style={[styles.boxWidthText]}
					editable={false}
				/>
				<SizableText size="$6">{label}</SizableText>
			</View>
			<Animated.View style={[styles.sliderTrack, trackStyle]}>
				<GestureDetector gesture={pan}>
					<Animated.View style={[styles.sliderHandle, sliderStyle]} />
				</GestureDetector>
			</Animated.View>
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
