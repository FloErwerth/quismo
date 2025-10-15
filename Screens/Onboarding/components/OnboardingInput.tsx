import { Input, type InputProps, SizableText, styled, View } from "tamagui";
import { HintText } from "@/Screens/Onboarding/components/HintText";

const StyledInput = styled(Input, {
	size: "$5",
});

export const OnboardingInput = ({
	label,
	subLabel,
	...props
}: InputProps & { label?: string; subLabel?: string }) => {
	return (
		<View gap="$2">
			{label && <SizableText size="$5">{label}</SizableText>}
			<StyledInput {...props} />
			{subLabel && <HintText>{subLabel}</HintText>}
		</View>
	);
};
