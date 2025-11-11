import { useState } from "react";
import Svg, { Polygon } from "react-native-svg";
import { type FontSizeTokens, getTokenValue, View, XStack } from "tamagui";
import { AnimatedText } from "@/components/AnimatedText";
import { FloatingView } from "@/components/FloatingView";

type TextBubbleProps = {
	text: string;
	arrowTopPercentage: number;
	arrowPosition: "left" | "right";
	size?: FontSizeTokens;
};

export const TextBubble = ({
	text,
	arrowTopPercentage,
	arrowPosition = "right",
	size = "$10",
}: TextBubbleProps) => {
	const [viewWidth, setViewWidth] = useState(0);

	const arrowPoints =
		arrowPosition === "left"
			? [`15,0`, `15,15`, `0,7.5`]
			: [`0,0`, `0,15`, `15,7.5`];

	return (
		<FloatingView width="60%">
			<XStack>
				<View
					onLayout={(event) => {
						setViewWidth(event.nativeEvent.layout.width);
					}}
					padding="$2"
					borderRadius="$6"
					borderWidth="$1"
					borderColor="$blue8Light"
					backgroundColor="$blue6Light"
				>
					<AnimatedText text={text} textAlign="center" size={size} />
				</View>
				<Svg
					style={{
						left: arrowPosition === "left" ? -viewWidth : 0,
						transform: [{ translateX: arrowPosition === "left" ? -15 : 0 }],
						width: 15,
						top: `${arrowTopPercentage}%`,
					}}
				>
					<Polygon
						points={arrowPoints}
						fill={getTokenValue("$blue8Light")}
					></Polygon>
				</Svg>
			</XStack>
		</FloatingView>
	);
};
