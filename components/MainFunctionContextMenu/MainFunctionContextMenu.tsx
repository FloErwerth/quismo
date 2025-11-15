import { CalendarCheck2, ChevronUp, Trophy, X } from "@tamagui/lucide-icons";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withDelay,
	withSpring,
	withTiming,
} from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";
import { AnimatePresence, Card, SizableText, View } from "tamagui";
import { FloatingView } from "@/components/FloatingView";

const MAX_PANNING_DISTANCE_X = 6;
const MAX_PANNING_DISTANCE_Y = 6;

const OPEN_ANIMATION_DURATION = 300;

const DEFAULT_SPRING_CONFIG = { damping: 80, stiffness: 1000 } as const;

export const MainFunctionContextMenu = () => {
	const distanceX = useSharedValue(0);
	const distanceY = useSharedValue(0);
	const height = useSharedValue(70);
	const width = useSharedValue(70);
	const bottom = useSharedValue(0);
	const left = useSharedValue(0);
	const scale = useSharedValue(1);
	const borderRadius = useSharedValue(100);
	const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
	const screen = useWindowDimensions();
	const contextMenuWidth = screen.width - 32;

	const bottomClose = useSharedValue(30);
	const bottomScale = useSharedValue(0);
	const bottomOpacity = useSharedValue(0);

	const closeButton = useAnimatedStyle(() => {
		return {
			bottom: bottomClose.value,
			transform: [{ scale: bottomScale.value }],
			opacity: bottomOpacity.value,
		};
	});

	const showCloseButton = () => {
		bottomClose.value = withSpring(50, DEFAULT_SPRING_CONFIG);
		bottomScale.value = withSpring(0, DEFAULT_SPRING_CONFIG);
		bottomOpacity.value = withTiming(0, { duration: 75 });
	};

	const resetCloseButton = () => {
		bottomClose.value = withDelay(30, withSpring(-10, DEFAULT_SPRING_CONFIG));
		bottomScale.value = withDelay(50, withSpring(1, DEFAULT_SPRING_CONFIG));
		bottomOpacity.value = withDelay(100, withSpring(1, DEFAULT_SPRING_CONFIG));
	};

	const closeContextMenu = () => {
		setIsContextMenuOpen(false);
		height.value = withSpring(70, DEFAULT_SPRING_CONFIG);
		width.value = withSpring(70, DEFAULT_SPRING_CONFIG);
		bottom.value = withSpring(0, { duration: OPEN_ANIMATION_DURATION });
		left.value = withSpring(0, { duration: OPEN_ANIMATION_DURATION });
		borderRadius.value = withSpring(100, DEFAULT_SPRING_CONFIG);

		showCloseButton();
	};

	const openContextMenu = () => {
		setIsContextMenuOpen(true);
		height.value = withSpring(150, DEFAULT_SPRING_CONFIG);
		width.value = withSpring(contextMenuWidth, DEFAULT_SPRING_CONFIG);
		bottom.value = withSpring(50, { duration: OPEN_ANIMATION_DURATION });
		left.value = withSpring(0, { duration: OPEN_ANIMATION_DURATION });
		borderRadius.value = withSpring(25, DEFAULT_SPRING_CONFIG);

		resetCloseButton();
	};

	const pan = Gesture.Pan()
		.onBegin(() => {
			distanceX.value = withSpring(0);
			distanceY.value = withSpring(0);
			scale.value = withSpring(0.9);
		})
		.onChange((event) => {
			const isDistanceXSmallerThanMaxValue =
				Math.abs(distanceX.value) <= MAX_PANNING_DISTANCE_X;
			const isDistanceYSmallerThanMaxValue =
				Math.abs(distanceY.value) <= MAX_PANNING_DISTANCE_Y;

			if (isDistanceXSmallerThanMaxValue) {
				distanceX.value = withSpring(distanceX.value + event.changeX);
			}
			if (isDistanceYSmallerThanMaxValue) {
				distanceY.value = withSpring(distanceY.value + event.changeY);
			}
		})
		.onTouchesUp(() => {
			distanceX.value = withSpring(0);
			distanceY.value = withSpring(0);
			scale.value = withSpring(1);
			scheduleOnRN(openContextMenu);
		});

	const animatedStyle = useAnimatedStyle(() => {
		return {
			transform: [
				{ translateX: distanceX.value },
				{ translateY: distanceY.value },
				{ scale: scale.value },
			],
		};
	});

	const buttonStyle = useAnimatedStyle(() => {
		return {
			height: height.value,
			width: width.value,
			bottom: bottom.value,
			left: left.value,
			borderRadius: borderRadius.value,
		};
	});

	return (
		<GestureDetector gesture={pan.enabled(!isContextMenuOpen)}>
			<View
				alignSelf="center"
				animation="superBouncy"
				position="absolute"
				zIndex={1}
				bottom={52}
			>
				<Animated.View style={animatedStyle}>
					<FloatingView
						active={!isContextMenuOpen}
						showShadow={false}
						translateYDeviation={4}
					>
						<Animated.View style={[styles.button, buttonStyle]}>
							<AnimatePresence>
								{isContextMenuOpen ? (
									<View
										key="context-menu-content"
										animation="100ms"
										gap="$4"
										padding="$4"
										enterStyle={{ opacity: 0 }}
										exitStyle={{ opacity: 0 }}
										backgroundColor="$background"
										width="95%"
										zIndex={1}
										height="95%"
										position="absolute"
									>
										<View flexDirection="row" gap="$4" flex={1}>
											<Card
												animation="bouncy"
												onPress={() => {
													router.push("/checkIn");
													setTimeout(() => closeContextMenu(), 500);
												}}
												pressStyle={{ scale: 0.9 }}
												backgroundColor="$blue4Light"
												flex={1}
												alignItems="center"
												justifyContent="center"
											>
												<CalendarCheck2 />
												<SizableText>Check-In</SizableText>
											</Card>
											<Card
												animation="bouncy"
												pressStyle={{ scale: 0.9 }}
												backgroundColor="$blue4Light"
												flex={1}
												alignItems="center"
												justifyContent="center"
											>
												<Trophy />
												<SizableText>Challenge</SizableText>
											</Card>
										</View>
									</View>
								) : (
									<View
										key="context-menu-button"
										animation="100ms"
										enterStyle={{ opacity: 0 }}
										exitStyle={{ opacity: 0 }}
									>
										<ChevronUp size="$2" alignSelf="center" />
									</View>
								)}
							</AnimatePresence>
						</Animated.View>
					</FloatingView>
				</Animated.View>
				<View onPress={closeContextMenu}>
					<Animated.View style={[styles.closeButton, closeButton]}>
						<X />
					</Animated.View>
				</View>
			</View>
		</GestureDetector>
	);
};

const styles = StyleSheet.create({
	button: {
		boxShadow:
			"inset 2px 2px 5px 1px rgba(112, 107, 255, 0.5), inset -2px -2px 5px 1px rgba(120, 255, 176, 0.5), 2px 2px 2px 0px rgba(112, 107, 255, 0.5), 0 0 14px 10px rgba(255, 255, 255, 1), 0 -10px 10px 0 rgba(140, 193, 253, 0.25)",
		overflow: "hidden",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "white",
	},

	closeButton: {
		position: "absolute",
		width: 45,
		boxShadow:
			"inset 2px 2px 5px 1px rgba(255, 107, 174, 0.5), 2px 2px 3px 0px rgba(255, 107, 174, 0.5)",
		height: 45,
		alignSelf: "center",
		borderRadius: 50,
		justifyContent: "center",
		alignItems: "center",
		zIndex: -1,
		backgroundColor: "white",
	},
});
