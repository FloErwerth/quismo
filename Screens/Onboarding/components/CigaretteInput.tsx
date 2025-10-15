import { Input, type InputProps } from "tamagui";

export const CigaretteInput = (props: InputProps) => {
	return (
		<Input
			size="$5"
			maxLength={3}
			autoFocus
			alignSelf="center"
			keyboardType="numeric"
			{...props}
		/>
	);
};
