import {
	Sheet as SheetCore,
	type SheetProps,
	SizableText,
	View,
} from "tamagui";
import { ScrollableScreen } from "@/components/Screens/ScrollableScreen";

export const Sheet = ({
	children,
	snapPointsMode = "fit",
	modal = true,
	dismissOnSnapToBottom = true,
	title,
	...props
}: SheetProps & { title?: string }) => {
	return (
		<SheetCore
			snapPointsMode={snapPointsMode}
			modal={modal}
			dismissOnSnapToBottom={dismissOnSnapToBottom}
			{...props}
		>
			<SheetCore.Overlay />
			<SheetCore.Handle />
			<SheetCore.Frame>
				{title && (
					<View padding="$4">
						<SizableText size="$7" alignSelf="center">
							{title}
						</SizableText>
					</View>
				)}
				<ScrollableScreen>{children}</ScrollableScreen>
			</SheetCore.Frame>
		</SheetCore>
	);
};
