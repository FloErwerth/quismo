import Picker, {
	type AndroidNativeProps,
	type DateTimePickerEvent,
	type IOSNativeProps,
} from "@react-native-community/datetimepicker";
import { Platform } from "react-native";
import { useTheme } from "tamagui";

export type DateTimePickerProps = (AndroidNativeProps | IOSNativeProps) & {
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
};

export const DateTimePicker = (props: DateTimePickerProps) => {
	const theme = useTheme();

	if (!props.open) {
		return null;
	}

	const handleChange = (event: DateTimePickerEvent, date: Date | undefined) => {
		if (event.type === "dismissed") {
			props.onOpenChange?.(false);
			return;
		}

		props.onOpenChange?.(false);
		props.onChange?.(event, date);
	};

	return (
		<Picker
			{...props}
			display={Platform.OS === "ios" ? "spinner" : "default"}
			textColor={theme.gray12Light.val}
			onChange={handleChange}
		/>
	);
};
