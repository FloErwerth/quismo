import { SizableText, View, type ViewProps } from "tamagui";
import { Button } from "@/components/tamagui/Button";

export type SelectableOptionsProps<
	T extends { value: string; label: string }[],
> = {
	onSelect: (item: T[number]) => void;
	items: T;
	value?: T[number]["value"];
} & ViewProps;

const SelectableOptionsItem = <
	T extends { value: string; label: string; isSelected?: boolean }[],
>({
	item,
	onSelect,
	disabled,
	isSelected,
}: {
	item: T[number];
	onSelect: (item: T[number]) => void;
	disabled?: boolean;
	isSelected?: boolean;
}) => {
	const backgroundColor = (() => {
		if (isSelected) {
			return "$blue11Light";
		}

		return disabled ? "$color.gray2Light" : "$gray3Light";
	})();

	const color = (() => {
		if (isSelected) {
			return "white";
		}

		return disabled ? "$gray8Light" : "$gray12Light";
	})();

	return (
		<Button
			size="$4"
			borderRadius="$12"
			disabled={disabled && !isSelected}
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
	T extends { value: string; label: string }[],
>({
	onSelect,
	items,
	disabled,
	value,
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
					key={item.value}
					animation="bouncy"
					enterStyle={{ scale: 0.8 - Math.random() * 0.2 }}
					scale={1}
				>
					<SelectableOptionsItem
						disabled={disabled}
						item={item}
						onSelect={onSelect}
						isSelected={item.value === value}
					/>
				</View>
			))}
		</View>
	);
};
