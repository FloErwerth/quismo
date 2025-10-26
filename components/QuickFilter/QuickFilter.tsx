import { ScrollView, type ScrollViewProps, SizableText } from "tamagui";
import { Button } from "@/components/tamagui/Button";

type QuickFilterProps<
	T extends { id: string; label: string; isSelected: boolean }[],
> = {
	onSelect: (item: T[number]) => void;
	items: T;
} & ScrollViewProps;

const QuickFilterItem = <
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

export const QuickFilter = <
	T extends { id: string; label: string; isSelected: boolean }[],
>({
	onSelect,
	items,
	...props
}: QuickFilterProps<T>) => {
	return (
		<ScrollView
			horizontal
			flexGrow={0}
			contentContainerStyle={{
				gap: 8,
				...(props.contentContainerStyle as object),
			}}
			{...props}
			showsHorizontalScrollIndicator={false}
		>
			{items.map((item) => (
				<QuickFilterItem key={item.id} item={item} onSelect={onSelect} />
			))}
		</ScrollView>
	);
};
