import { CalendarCheck, Cog, House } from "@tamagui/lucide-icons";
import { Tabs } from "expo-router";
import { useState } from "react";
import { useWindowDimensions } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withSpring,
} from "react-native-reanimated";
import { AnimatePresence, Card, SizableText, useTheme, View } from "tamagui";
import { FloatingView } from "@/components/FloatingView";

const MAX_PANNING_DISTANCE_X = 6;
const MAX_PANNING_DISTANCE_Y = 6;

const OPEN_ANIMATION_DURATION = 300;

const ContextMenu = () => {
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
	const contextMenuWidth = Math.min(screen.width - 32, 300);

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
			boxShadow:
				"inset 2px 2px 5px 1px rgba(112, 107, 255, 0.5), inset -2px -2px 5px 1px rgba(120, 255, 176, 0.5), 2px 2px 2px 0px rgba(112, 107, 255, 0.5), 0 0 14px 10px rgba(255, 255, 255, 1), 0 -10px 10px 0 rgba(140, 193, 253, 0.25)",
			overflow: "hidden",
			justifyContent: "center",
			alignItems: "center",
			borderRadius: borderRadius.value,
			backgroundColor: "white",
			height: height.value,
			width: width.value,
			bottom: bottom.value,
			left: left.value,
		};
	});

	const closeContextMenu = () => {
		setIsContextMenuOpen(false);
		height.value = withSpring(70, { damping: 100, stiffness: 1200 });
		width.value = withSpring(70, { damping: 100, stiffness: 1200 });
		bottom.value = withSpring(0, { duration: OPEN_ANIMATION_DURATION });
		left.value = withSpring(0, { duration: OPEN_ANIMATION_DURATION });
		borderRadius.value = withSpring(100, { damping: 80, stiffness: 1200 });
	};

	const openContextMenu = () => {
		setIsContextMenuOpen(true);
		height.value = withSpring(300, { damping: 80, stiffness: 1200 });
		width.value = withSpring(contextMenuWidth, {
			damping: 80,
			stiffness: 1200,
		});
		bottom.value = withSpring(50, { duration: OPEN_ANIMATION_DURATION });
		left.value = withSpring(0, { duration: OPEN_ANIMATION_DURATION });
		borderRadius.value = withSpring(25, { damping: 80, stiffness: 1200 });
	};

	const toggleContextMenu = () => {
		if (isContextMenuOpen) {
			closeContextMenu();
		} else {
			openContextMenu();
		}
	};

	return (
		<GestureDetector gesture={pan.enabled(!isContextMenuOpen)}>
			<View
				onPress={toggleContextMenu}
				alignSelf="center"
				animation="superBouncy"
				position="absolute"
				zIndex={1}
				bottom={50}
			>
				<Animated.View style={animatedStyle}>
					<FloatingView
						active={!isContextMenuOpen}
						showShadow={false}
						translateYDeviation={4}
					>
						<Animated.View style={buttonStyle}>
							<AnimatePresence>
								{isContextMenuOpen ? (
									<View
										key="context-menu-content"
										animation="quick"
										gap="$4"
										padding="$4"
										enterStyle={{ opacity: 0 }}
										exitStyle={{ opacity: 0, animationDuration: 100 }}
										backgroundColor="transparent"
										width="95%"
										height="95%"
										position="absolute"
									>
										<View flexDirection="row" gap="$4" flex={1}>
											<Card backgroundColor="$blue4Light" flex={1}></Card>
											<Card backgroundColor="$blue4Light" flex={1}></Card>
										</View>
										<View flexDirection="row" gap="$4" flex={1}>
											<Card backgroundColor="$blue4Light" flex={1}></Card>
											<Card backgroundColor="$blue4Light" flex={1}></Card>
										</View>
									</View>
								) : (
									<View
										key="context-menu-button"
										animation="quick"
										enterStyle={{ opacity: 0 }}
										exitStyle={{ opacity: 0 }}
									>
										<CalendarCheck size="$1" scale={0.8} alignSelf="center" />
										<SizableText>Open</SizableText>
									</View>
								)}
							</AnimatePresence>
						</Animated.View>
					</FloatingView>
				</Animated.View>
			</View>
		</GestureDetector>
	);
};

export default function TabsLayout() {
	const theme = useTheme();

	return (
		<>
			<ContextMenu />
			<Tabs
				screenOptions={{
					headerShown: false,
					tabBarAllowFontScaling: false,
					tabBarStyle: {
						height: 90,
						paddingTop: 16,
						borderTopWidth: 0,
						boxShadow: "0 2px 10px 0 rgba(0, 0, 0, 0.1)",
					},
					tabBarActiveTintColor: theme.blue11Light.val,
				}}
			>
				<Tabs.Screen
					name="index"
					options={{
						title: "Home",
						tabBarIcon: ({ color }) => <House size={28} color={color} />,
					}}
				/>
				<Tabs.Screen
					name="settings"
					options={{
						title: "Settings",
						tabBarIcon: ({ color }) => <Cog size={28} color={color} />,
					}}
				/>
			</Tabs>
		</>
	);
}
