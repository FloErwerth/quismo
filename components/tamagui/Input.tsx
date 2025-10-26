import { type InputProps, Input as TamaguiInput } from "tamagui";
import { NumberInput } from "@/components/NumberInput/NumberInput";

const isNumericInput = (keyboardType: InputProps["keyboardType"]) => {
	return (
		keyboardType === "numeric" ||
		keyboardType === "decimal-pad" ||
		keyboardType === "number-pad"
	);
};

/**
 * Component that wraps the Tamagui Input component and adds a numeric input functionality.
 */
export const Input = (props: InputProps) => {
	if (isNumericInput(props.keyboardType)) {
		return <NumberInput {...props} />;
	}
	return <TamaguiInput {...props} />;
};
