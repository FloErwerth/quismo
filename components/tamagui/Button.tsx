import type { ComponentProps } from "react";
import { styled, Button as TamaguiButton } from "tamagui";

const StyledButton = styled(TamaguiButton, {
	variants: {
		disabled: {
			true: {
				color: "$color.gray1Light",
				backgroundColor: "$color.gray6Light",
			},
		},
		variant: {
			primary: {
				color: "$color.gray1Light",
				backgroundColor: "$color.blue11Light",
			},
		},
	},
	defaultVariants: {
		variant: "primary",
	},
});

export const Button = ({
	children,
	...props
}: ComponentProps<typeof StyledButton>) => {
	return <StyledButton {...props}>{children}</StyledButton>;
};
