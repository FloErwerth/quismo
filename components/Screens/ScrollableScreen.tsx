import {
	KeyboardAwareScrollView,
	type KeyboardAwareScrollViewProps,
} from "react-native-keyboard-controller";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getTokenValue } from "tamagui";
import { GradientBackground } from "@/components/Backgrounds/GradientBackground";
import { Screen, type ScreenProps } from "@/components/Screens/Screen";

export const ScrollableScreen = ({
	children,
	flex = 1,
	keyboardShouldPersistTaps = "handled",
	...props
}: ScreenProps &
	Pick<KeyboardAwareScrollViewProps, "keyboardShouldPersistTaps">) => {
	const { bottom, top, left, right } = useSafeAreaInsets();

	const totalPaddingBottom = (() => {
		const targetPadding = getTokenValue("$8", "space");
		if (bottom === 0) {
			return targetPadding;
		}

		const deltaPadding = targetPadding - bottom;

		if (deltaPadding < 0) {
			return bottom;
		}

		return bottom + deltaPadding;
	})();

	return (
		<GradientBackground>
			<KeyboardAwareScrollView
				keyboardShouldPersistTaps={keyboardShouldPersistTaps}
				contentContainerStyle={{
					flexGrow: flex ? 1 : 0,
					paddingTop: top || 16,
					paddingBottom: totalPaddingBottom,
					paddingHorizontal: left,
					paddingRight: right,
				}}
			>
				<Screen paddingVertical={0} flex={flex} {...props}>
					{children}
				</Screen>
			</KeyboardAwareScrollView>
		</GradientBackground>
	);
};
