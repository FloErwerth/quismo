import { SizableText, View, type ViewProps } from "tamagui";
import { Button } from "@/components/tamagui/Button";

type SelectableOptionsProps<
	T extends { id: string; label: string; isSelected: boolean }[],
> = {
	onSelect: (item: T[number]) => void;
	items: T;
} & ViewProps;

const SelectableOptionsItem = <
	T extends { id: string; label: string; isSelected: boolean }[],
>({
	item,
	onSelect,
}: {
	item: T[number];
	onSelect: (item: T[number]) => void;
}) => {
	return (
		<Button
			size="$3"
			borderRadius="$12"
			backgroundColor={item.isSelected ? "$blue11Light" : "$gray3Light"}
			onPress={() => onSelect(item)}
		>
			<SizableText color={item.isSelected ? "white" : "$gray12Light"}>
				{item.label}
			</SizableText>
		</Button>
	);
};

export const SelectableOptions = <
	T extends { id: string; label: string; isSelected: boolean }[],
>({
	onSelect,
	items,
	...props
}: SelectableOptionsProps<T>) => {
	return (
		<View
			gap="$2"
			flexWrap="wrap"
			justifyContent="center"
			flexDirection="row"
			{...props}
		>
			{items.map((item) => (
				<SelectableOptionsItem key={item.id} item={item} onSelect={onSelect} />
			))}
		</View>
	);
};
