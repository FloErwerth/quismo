import {
	KeyboardAwareScrollView,
	type KeyboardAwareScrollViewProps,
} from "react-native-keyboard-controller";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Screen, type ScreenProps } from "@/components/Screens/Screen";

export const ScrollableScreen = ({
	children,
	keyboardShouldPersistTaps = "handled",
	...props
}: ScreenProps &
	Pick<KeyboardAwareScrollViewProps, "keyboardShouldPersistTaps">) => {
	const insets = useSafeAreaInsets();

	return (
		<KeyboardAwareScrollView
			keyboardShouldPersistTaps={keyboardShouldPersistTaps}
			contentContainerStyle={{
				flexGrow: props.flex ? 1 : 0,
				paddingTop: insets.top,
				paddingBottom: insets.bottom,
				paddingHorizontal: insets.left,
				paddingRight: insets.right,
			}}
		>
			<Screen paddingVertical={0} {...props}>
				{children}
			</Screen>
		</KeyboardAwareScrollView>
	);
};
