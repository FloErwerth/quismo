import { useEffect, useRef } from "react";
import type { TextInput } from "react-native";

export const useFocusBlurOnboardingInput = () => {
	const inputRef = useRef<TextInput>(null);

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (inputRef.current) {
				inputRef.current.focus();
			}
		}, 500);

		return () => {
			clearTimeout(timeout);
			if (inputRef.current) {
				inputRef.current.blur();
			}
		};
	}, []);

	return { inputRef };
};
