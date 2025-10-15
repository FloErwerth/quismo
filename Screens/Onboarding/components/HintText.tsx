import { SizableText } from "tamagui";

export const HintText = ({ children }: { children: React.ReactNode }) => {
	return (
		<SizableText size="$5" color="$color.gray9Light">
			{children}
		</SizableText>
	);
};
