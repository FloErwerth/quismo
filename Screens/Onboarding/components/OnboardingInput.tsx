import { useRef } from "react";
import type { TextInput } from "react-native";
import { type InputProps, SizableText, View } from "tamagui";
import { Input } from "@/components/tamagui/Input";
import { HintText } from "@/Screens/Onboarding/components/HintText";

export const OnboardingInput = ({
	label,
	subLabel,
	value,
	...props
}: Omit<InputProps, "value" | "defaultValue"> & {
	label?: string;
	subLabel?: string;
	value?: string;
}) => {
	const inputRef = useRef<TextInput>(null);

	return (
		<View gap="$2">
			{label && <SizableText size="$8">{label}</SizableText>}
			<Input size="$6" value={value} {...props} ref={inputRef} />
			{subLabel && <HintText>{subLabel}</HintText>}
		</View>
	);
};
