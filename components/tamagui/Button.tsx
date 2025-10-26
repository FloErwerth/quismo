import type { ComponentProps } from "react";
import type { GestureResponderEvent } from "react-native";
import {
	debounce,
	styled,
	Button as TamaguiButton,
	withStaticProperties,
} from "tamagui";

const StyledButton = styled(TamaguiButton, {
	variants: {
		disabled: {
			true: {
				color: "$gray8Light",
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

const DebouncedButton = ({
	children,
	debounceDuration = 250,
	debounceLeading = true,
	...props
}: ComponentProps<typeof StyledButton> & {
	debounceDuration?: number;
	debounceLeading?: boolean;
}) => {
	const handlePress = (event: GestureResponderEvent) => {
		props.onPress?.(event);
	};

	return (
		<StyledButton
			{...props}
			onPress={debounce(handlePress, debounceDuration, debounceLeading)}
		>
			{children}
		</StyledButton>
	);
};

export const Button = withStaticProperties(StyledButton, {
	Debounced: DebouncedButton,
});
