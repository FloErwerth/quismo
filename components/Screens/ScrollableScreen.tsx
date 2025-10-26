import {
	KeyboardAwareScrollView,
	type KeyboardAwareScrollViewProps,
} from "react-native-keyboard-controller";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GradientBackground } from "@/components/Screens/GradientBackground";
import { Screen, type ScreenProps } from "@/components/Screens/Screen";

export const ScrollableScreen = ({
	children,
	flex = 1,
	keyboardShouldPersistTaps = "handled",
	...props
}: ScreenProps &
	Pick<KeyboardAwareScrollViewProps, "keyboardShouldPersistTaps">) => {
	const insets = useSafeAreaInsets();

	return (
		<GradientBackground>
			<KeyboardAwareScrollView
				keyboardShouldPersistTaps={keyboardShouldPersistTaps}
				contentContainerStyle={{
					flexGrow: flex ? 1 : 0,
					paddingTop: insets.top || 16,
					paddingBottom: insets.bottom,
					paddingHorizontal: insets.left,
					paddingRight: insets.right,
				}}
			>
				<Screen paddingVertical={0} flex={flex} {...props}>
					{children}
				</Screen>
			</KeyboardAwareScrollView>
		</GradientBackground>
	);
};
