import type { PropsWithChildren } from "react";
import Animated, { type CSSAnimationKeyframes } from "react-native-reanimated";
import { View, type ViewProps } from "tamagui";

type FloatingViewProps = PropsWithChildren & {
	width?: `${number}%`;
	showShadow?: boolean;
	translateYDeviation?: number;
	pulse?: boolean;
	active?: boolean;
} & Omit<ViewProps, "width">;

export const FloatingView = ({
	children,
	width = "98%",
	showShadow = true,
	translateYDeviation = 2,
	pulse = false,
	active = true,
	...props
}: FloatingViewProps) => {
	const shadowFloat: CSSAnimationKeyframes = {
		from: {
			left: "1%",
			width: "98%",
			opacity: 0.025,
		},
		to: {
			left: "2.5%",
			width: "95%",
			opacity: 0.05,
		},
	};

	const pulseAnimation: CSSAnimationKeyframes = {
		"0%": {
			transform: [{ scale: 1 }],
		},
		"2%": {
			transform: [{ scale: 1.02 }],
		},
		"4%": {
			transform: [{ scale: 1 }],
		},
		"6%": {
			transform: [{ scale: 1.02 }],
		},
		"8%": {
			transform: [{ scale: 1 }],
		},
		"100%": {
			transform: [{ scale: 1 }],
		},
	};

	const float: CSSAnimationKeyframes = {
		from: {
			transform: [{ translateY: 0 }],
		},
		to: {
			transform: [{ translateY: translateYDeviation }],
		},
	};

	return (
		<View gap="$1" width={width} {...props}>
			<Animated.View
				style={{
					animationPlayState: active && pulse ? "running" : "paused",
					animationName: pulseAnimation,
					animationDuration: "10s",
					animationIterationCount: "infinite",
					animationTimingFunction: "ease-in-out",
					animationDirection: "normal",
				}}
			>
				<Animated.View
					style={{
						animationPlayState: active ? "running" : "paused",
						animationName: float,
						animationDuration: "2s",
						animationIterationCount: "infinite",
						animationTimingFunction: "ease-in-out",
						animationDirection: "alternate",
					}}
				>
					{children}
				</Animated.View>
			</Animated.View>
			{showShadow && (
				<Animated.View
					style={{
						animationPlayState: active ? "running" : "paused",
						animationName: shadowFloat,
						animationDuration: "2s",
						animationIterationCount: "infinite",
						animationTimingFunction: "ease-in-out",
						animationDirection: "alternate",
						borderRadius: 25,
						height: 5,

						backgroundColor: "black",
					}}
				/>
			)}
		</View>
	);
};
