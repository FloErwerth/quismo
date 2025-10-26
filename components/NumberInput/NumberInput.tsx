import { Input, type InputProps } from "tamagui";
import { isValidDecimalNumber } from "@/utils/number";

export const NumberInput = ({ value, onChangeText, ...props }: InputProps) => {
	const handleChangeText = (text: string) => {
		if (!isValidDecimalNumber(text)) {
			return;
		}
		onChangeText?.(text.replace(",", "."));
	};

	return (
		<Input
			keyboardType="numeric"
			value={value?.replace(".", ",") ?? ""}
			onChangeText={handleChangeText}
			{...props}
		/>
	);
};
