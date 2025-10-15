import type { PropsWithChildren } from "react";
import { Pressable } from "react-native";
import { Card } from "tamagui";

type SelectableCardProps = {
	selected: boolean;
	onPress: () => void;
} & PropsWithChildren;

export const SelectableCard = ({
	onPress,
	selected,
	children,
}: SelectableCardProps) => {
	return (
		<Pressable onPress={onPress}>
			<Card
				padded
				elevate
				backgroundColor={selected ? "$color.blue6Light" : "$color.gray2Light"}
			>
				{children}
			</Card>
		</Pressable>
	);
};
