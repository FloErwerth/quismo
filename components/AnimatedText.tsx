import { useEffect } from "react";
import Animated, { FadeIn } from "react-native-reanimated";
import { SizableText, type SizableTextProps } from "tamagui";
import { useSetTimeout } from "@/hooks/useSetTimeout";

type AnimatedTextProps = {
	text: string;
	additionalDelay?: number;
	wordsDelay?: number;
	initialDelay?: number;
	onAllTextAnimated?: () => void;
} & SizableTextProps;

export const AnimatedText = ({
	text,
	additionalDelay = 0,
	wordsDelay = 50,
	initialDelay = 200,
	onAllTextAnimated,
	...props
}: AnimatedTextProps) => {
	const parts = text.split(" ");
	const { setTimeout } = useSetTimeout();
	const delay = initialDelay + additionalDelay + parts.length * wordsDelay;

	useEffect(() => {
		setTimeout(() => {
			onAllTextAnimated?.();
		}, delay);
	}, [setTimeout, delay, onAllTextAnimated]);

	return (
		<SizableText {...props}>
			{parts.map((part, index) => (
				<Animated.View
					key={part}
					entering={FadeIn.delay(
						initialDelay + additionalDelay + index * wordsDelay,
					)}
				>
					<SizableText {...props}>
						{part} {index < parts.length - 1 && ""}
					</SizableText>
				</Animated.View>
			))}
		</SizableText>
	);
};
