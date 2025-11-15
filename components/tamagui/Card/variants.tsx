import { type BadgeInfo, Info } from "@tamagui/lucide-icons";
import { LinearGradient } from "expo-linear-gradient";
import type { ComponentProps, FC, PropsWithChildren } from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
	type CSSAnimationKeyframes,
	useAnimatedReaction,
	useAnimatedStyle,
	useSharedValue,
	withSpring,
	withTiming,
} from "react-native-reanimated";
import { type CardProps, SizableText, useTheme, View, XStack } from "tamagui";
import { Card } from "@/components/tamagui/Card";

type InfoCardProps = PropsWithChildren<{
	title?: string;
}>;

export const InfoCard = ({ children, title }: InfoCardProps) => {
	return (
		<Card
			backgroundColor="$blue2Light"
			boxShadow="0 0 10px 0 rgba(0, 0, 0,1)"
			bordered
			borderColor="$blue6Light"
			gap={title ? "$2" : "$0"}
		>
			{title && (
				<XStack gap="$2">
					<Info size="$1" color="$blue6Light" />
					<SizableText color="$blue6Light">{title}</SizableText>
				</XStack>
			)}
			{children}
		</Card>
	);
};

const pulse: CSSAnimationKeyframes = {
	from: {
		elevation: 4,
	},
	to: {
		elevation: 8,
	},
};

export const AttentionCard = ({
	children,
	onPress,
}: PropsWithChildren<{ onPress?: () => void }>) => {
	const theme = useTheme();

	return (
		<Animated.View
			style={{
				borderRadius: 16,
				overflow: "hidden",
				backgroundColor: theme.background.val,
				animationName: pulse,
				animationDuration: "1s",
				animationIterationCount: "infinite",
				animationTimingFunction: "ease-in-out",
				animationDirection: "alternate",
			}}
		>
			<LinearGradient
				locations={[0, 0.5, 1]}
				start={{ x: 1, y: 1 }}
				end={{ x: 0, y: 0 }}
				style={{ flex: 1 }}
				colors={[
					theme.green2Light.val,
					theme.blue4Light.val,
					theme.green2Light.val,
				]}
			>
				<View padding="$4" onPress={onPress}>
					{children}
				</View>
			</LinearGradient>
		</Animated.View>
	);
};

type SelectableCardProps = PropsWithChildren<
	{
		selected: boolean;
		title: string;
		description?: string;
		Icon: FC<ComponentProps<typeof BadgeInfo>>;
		onPress: () => void;
	} & CardProps
>;

const springConfig = {
	damping: 70,
	stiffness: 800,
};

const MAX_PANNING_DISTANCE_X = 1;
const MAX_PANNING_DISTANCE_Y = 1;
const paddingTop = 15;
const iconSize = 24;
export const SelectableCard = ({
	selected,
	title,
	description,
	Icon,
	onPress,
	...props
}: SelectableCardProps) => {
	const iconScale = useSharedValue(0);
	const iconLeft = useSharedValue(0);
	const iconTop = useSharedValue(0);
	const titleLeft = useSharedValue(0);
	const cardScale = useSharedValue(1);
	const distanceX = useSharedValue(0);
	const distanceY = useSharedValue(0);

	const descriptionHeight = useSharedValue(0);

	useAnimatedReaction(
		() => selected,
		(isSelected) => {
			if (isSelected) {
				iconScale.value = withSpring(1, springConfig);
				iconTop.value = withSpring(paddingTop, springConfig);
				titleLeft.value = withSpring(iconSize + 4, springConfig);
			} else {
				iconScale.value = withTiming(0, { duration: 150 });
				iconLeft.value = withSpring(10, springConfig);
				iconTop.value = withSpring(0, springConfig);
				titleLeft.value = withSpring(0, springConfig);

				descriptionHeight.value = withTiming(0, { duration: 150 });
			}
		},
	);

	const iconStyle = useAnimatedStyle(() => ({
		overflow: "hidden",
		position: "absolute",
		width: iconSize,
		transform: [{ scale: iconScale.value }],
	}));

	const titleStyle = useAnimatedStyle(() => ({
		left: titleLeft.value,
	}));

	const descriptionStyle = useAnimatedStyle(() => ({
		maxHeight: descriptionHeight.value,
	}));

	const cardStyle = useAnimatedStyle(() => ({
		transform: [
			{ scale: cardScale.value },
			{ translateX: distanceX.value },
			{ translateY: distanceY.value },
		],
	}));

	const pan = Gesture.Pan()
		.onTouchesDown(() => {
			cardScale.value = withTiming(0.95, { duration: 150 });
		})
		.onChange((event) => {
			const isDistanceXSmallerThanMaxValue =
				Math.abs(distanceX.value) <= MAX_PANNING_DISTANCE_X;
			const isDistanceYSmallerThanMaxValue =
				Math.abs(distanceY.value) <= MAX_PANNING_DISTANCE_Y;

			const isNegativeChangeX =
				event.translationX < 0 ? event.changeX > 0 : event.changeX < 0;

			const isNegativeChangeY =
				event.translationY < 0 ? event.changeY > 0 : event.changeY < 0;

			if (isDistanceXSmallerThanMaxValue) {
				distanceX.value = withSpring(distanceX.value + event.changeX);
			}
			if (isNegativeChangeX) {
				distanceX.value = withSpring(distanceX.value + event.changeX);
			}
			if (isDistanceYSmallerThanMaxValue) {
				distanceY.value = withSpring(distanceY.value + event.changeY);
			}
			if (isNegativeChangeY) {
				distanceY.value = withSpring(distanceY.value + event.changeY);
			}
		})
		.onTouchesUp(() => {
			distanceX.value = withSpring(0);
			distanceY.value = withSpring(0);
			cardScale.value = withSpring(1, springConfig);
		});
	return (
		<GestureDetector gesture={pan}>
			<Animated.View style={cardStyle}>
				<Card
					{...props}
					gap="$2"
					padding="$3"
					borderWidth="$1"
					borderColor={selected ? "$blue6Light" : "$blue2Light"}
					backgroundColor={selected ? "$blue4Light" : "$blue2Light"}
					onPress={onPress}
					animation="quick"
				>
					<View>
						<Animated.View style={iconStyle}>
							{<Icon size={iconSize} />}
						</Animated.View>
						<Animated.View style={titleStyle}>
							<SizableText alignSelf="flex-start" size="$6" flex={props.flex}>
								{title}
							</SizableText>
						</Animated.View>
					</View>
					{description && (
						<SizableText flex={props.flex}>{description}</SizableText>
					)}
				</Card>
			</Animated.View>
		</GestureDetector>
	);
};
