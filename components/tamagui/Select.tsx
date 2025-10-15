import { useState } from "react";
import { Pressable, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button, SizableText, View } from "tamagui";
import { Sheet } from "@/components/tamagui/Sheet";

type SelectProps<T extends string[]> = {
	items: T;
	labelMap?: Record<T[number], string>;
	selectedItem: T[number];
	onSelectionChange: (item: T[number]) => void;
	placeholder: string;
	sheetTitle?: string;
};

export const Select = <T extends string[]>(props: SelectProps<T>) => {
	const [open, setOpen] = useState(false);
	const value = (() => {
		if (props.labelMap && props.selectedItem) {
			return props.labelMap[props.selectedItem];
		}

		if (props.selectedItem) {
			return props.selectedItem;
		}

		return props.placeholder;
	})();

	const { height } = useWindowDimensions();
	const { top } = useSafeAreaInsets();
	const snapPoints = [height - top];

	return (
		<>
			<Button
				variant="outlined"
				size="$5"
				borderWidth="$0.5"
				borderColor="$color.gray5Light"
				backgroundColor="$color.gray2Light"
				borderRadius="$4"
				onPress={() => setOpen(true)}
			>
				{value}
			</Button>
			<Sheet
				title={props.sheetTitle}
				snapPointsMode="constant"
				snapPoints={snapPoints}
				open={open}
				onOpenChange={setOpen}
			>
				<View gap="$2">
					{props.items.map((item) => (
						<Pressable
							key={item}
							onPress={() => {
								setOpen(false);
								props.onSelectionChange(item);
							}}
						>
							<View
								padding="$4"
								borderWidth="$1"
								borderColor={
									item === props.selectedItem
										? "$color.gray8Light"
										: "transparent"
								}
								backgroundColor={
									item === props.selectedItem
										? "$color.gray7Light"
										: "$color.gray4Light"
								}
								borderRadius="$4"
							>
								<SizableText size="$6">
									{props.labelMap?.[item as T[number]] || item}
								</SizableText>
							</View>
						</Pressable>
					))}
				</View>
			</Sheet>
		</>
	);
};
