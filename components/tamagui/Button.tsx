import type { ComponentProps } from "react";
import type { GestureResponderEvent } from "react-native";
import {
	debounce,
	styled,
	Button as TamaguiButton,
	withStaticProperties,
} from "tamagui";
import { FloatingView } from "@/components/FloatingView";

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
				borderRadius: "$6",
				borderWidth: "$1.5",
				borderColor: "black",
			},
			secondary: {
				backgroundColor: "$color.blue6Light",
				borderRadius: "$6",
			},
			ghost: {
				backgroundColor: "transparent",
				borderWidth: 0,
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

const FloatingButton = ({
	children,
	...props
}: ComponentProps<typeof StyledButton> & {
	debounceDuration?: number;
	debounceLeading?: boolean;
}) => {
	return (
		<FloatingView>
			<StyledButton {...props}>{children}</StyledButton>
		</FloatingView>
	);
};

export const Button = withStaticProperties(StyledButton, {
	Debounced: DebouncedButton,
	Floating: FloatingButton,
});
