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
	return (
		<View gap="$2">
			{label && <SizableText size="$5">{label}</SizableText>}
			<Input size="$5" value={value} {...props} />
			{subLabel && <HintText>{subLabel}</HintText>}
		</View>
	);
};
