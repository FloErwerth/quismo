import { Info } from "@tamagui/lucide-icons";
import { LinearGradient } from "expo-linear-gradient";
import type { PropsWithChildren } from "react";
import Animated, { type CSSAnimationKeyframes } from "react-native-reanimated";
import { SizableText, useTheme, View, XStack } from "tamagui";
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
