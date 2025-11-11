import type { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { type ComponentProps, useState } from "react";
import { Platform } from "react-native";
import {
	DateTimePicker,
	type DateTimePickerProps,
} from "@/components/DateTimePicker/DateTimePicker";
import { AlarmDialog } from "@/components/tamagui/AlarmDialog";

type DatePickerDialogProps = {
	dialogProps: ComponentProps<typeof AlarmDialog>;
	pickerProps: Omit<
		DateTimePickerProps,
		"open" | "onOpenChange" | "onChange"
	> & { onDateChange: (date: Date | undefined) => void };
};

export const DateTimePickerDialog = ({
	dialogProps,
	pickerProps,
}: DatePickerDialogProps) => {
	const [internalValue, setInternalValue] = useState<Date | undefined>(
		pickerProps.value,
	);

	const handleChange = (event: DateTimePickerEvent, date: Date | undefined) => {
		if (event.type === "dismissed") {
			dialogProps.onOpenChange?.(false);
			return;
		}
		setInternalValue(date);
	};

	return (
		<AlarmDialog
			onConfirm={() => pickerProps.onDateChange?.(internalValue)}
			onCancel={() => dialogProps.onOpenChange?.(false)}
			{...dialogProps}
		>
			<DateTimePicker
				{...pickerProps}
				display={Platform.OS === "ios" ? "spinner" : "default"}
				open
				onChange={handleChange}
			/>
		</AlarmDialog>
	);
};
