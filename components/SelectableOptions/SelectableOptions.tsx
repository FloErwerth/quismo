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

		return disabled ? "$color.gray2Light" : "$gray3Light";
	})();

	const color = (() => {
		if (item.isSelected) {
			return "white";
		}

		return disabled ? "$gray8Light" : "$gray12Light";
	})();

	return (
		<Button
			size="$4"
			borderRadius="$12"
			disabled={disabled && !item.isSelected}
			backgroundColor={backgroundColor}
			onPress={() => onSelect(item)}
		>
			<SizableText color={color} size="$6">
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
				<View
					key={item.id}
					animation="bouncy"
					enterStyle={{ scale: 0.8 - Math.random() * 0.2 }}
					scale={1}
				>
					<SelectableOptionsItem
						disabled={disabled}
						item={item}
						onSelect={onSelect}
					/>
				</View>
			))}
		</View>
	);
};
