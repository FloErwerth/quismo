import { useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
	Sheet as SheetCore,
	type SheetProps,
	SizableText,
	View,
} from "tamagui";
import { Screen } from "@/components/Screens/Screen";

export const Sheet = ({
	children,
	snapPoints,
	snapPointsMode = "fit",
	modal = true,
	dismissOnSnapToBottom = true,
	title,
	...props
}: Omit<SheetProps, "snapPointsMode"> & {
	snapPointsMode?: SheetProps["snapPointsMode"] | "screen";
	title?: string;
}) => {
	const { top } = useSafeAreaInsets();
	const { height } = useWindowDimensions();

	const snapPointsProps: {
		snapPointsMode?: SheetProps["snapPointsMode"];
		snapPoints?: (string | number)[];
	} = (() => {
		if (snapPointsMode === "screen") {
			return {
				snapPointsMode: "percent",
				snapPoints: [((height - top) / height) * 100],
			};
		}
		return {
			snapPointsMode,
			snapPoints,
		};
	})();

	return (
		<SheetCore
			modal={modal}
			dismissOnSnapToBottom={dismissOnSnapToBottom}
			{...snapPointsProps}
			{...props}
		>
			<SheetCore.Overlay opacity={0.5} />
			<SheetCore.Handle />
			<SheetCore.Frame>
				{title && (
					<View padding="$4">
						<SizableText size="$7" alignSelf="center">
							{title}
						</SizableText>
					</View>
				)}
				<Screen paddingTop={0}>{children}</Screen>
			</SheetCore.Frame>
		</SheetCore>
	);
};
