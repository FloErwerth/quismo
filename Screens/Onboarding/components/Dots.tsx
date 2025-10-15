import { View, XStack } from "tamagui";

type DotsProps = {
	activeIndex: number;
	totalSteps: number;
};
export const Dots = ({ activeIndex, totalSteps }: DotsProps) => {
	return (
		<XStack gap="$2" alignSelf="center">
			{Array.from({ length: totalSteps }).map((_, index) => (
				<View
					key={index}
					width="$1"
					height="$1"
					borderRadius="$12"
					backgroundColor={
						index === activeIndex ? "$color.green8Light" : "$color.gray5Light"
					}
				/>
			))}
		</XStack>
	);
};
