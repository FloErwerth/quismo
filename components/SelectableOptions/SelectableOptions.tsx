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
	disabled,
}: {
	item: T[number];
	onSelect: (item: T[number]) => void;
	disabled?: boolean;
}) => {
	const backgroundColor = (() => {
		if (item.isSelected) {
			return "$blue11Light";
		}

		return disabled ? "$color.gray6Light" : "$gray3Light";
	})();

	const color = (() => {
		if (item.isSelected) {
			return "white";
		}

		return disabled ? "$gray8Light" : "$gray12Light";
	})();

	return (
		<Button
			size="$3"
			borderRadius="$12"
			disabled={disabled && !item.isSelected}
			backgroundColor={backgroundColor}
			onPress={() => onSelect(item)}
		>
			<SizableText color={color}>{item.label}</SizableText>
		</Button>
	);
};

export const SelectableOptions = <
	T extends { id: string; label: string; isSelected: boolean }[],
>({
	onSelect,
	items,
	disabled,
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
				<SelectableOptionsItem
					disabled={disabled}
					key={item.id}
					item={item}
					onSelect={onSelect}
				/>
			))}
		</View>
	);
};
