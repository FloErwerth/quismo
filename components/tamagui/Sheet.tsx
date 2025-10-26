import {
	Sheet as SheetCore,
	type SheetProps,
	SizableText,
	View,
} from "tamagui";
import { Screen } from "@/components/Screens/Screen";

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
				<Screen paddingTop={0}>{children}</Screen>
			</SheetCore.Frame>
		</SheetCore>
	);
};
