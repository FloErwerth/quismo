import type { PropsWithChildren } from "react";
import {
	KeyboardAwareScrollView,
	type KeyboardAwareScrollViewProps,
} from "react-native-keyboard-controller";

export const ScrollView = ({
	children,
	...props
}: PropsWithChildren & KeyboardAwareScrollViewProps) => {
	return (
		<KeyboardAwareScrollView {...props}>{children}</KeyboardAwareScrollView>
	);
};
