import { useState } from "react";
import { Platform } from "react-native";
import { SizableText, View } from "tamagui";
import { DateTimePickerDialog } from "@/components/DateTimePicker/DatePickerDialog";
import { DateTimePicker } from "@/components/DateTimePicker/DateTimePicker";
import { StepperPage } from "@/components/Stepper/StepperPage";
import { Button } from "@/components/tamagui/Button";
import { useStoreSelector } from "@/storage/storage";
import { formatTime } from "@/utils/date";

export const OnboardingCheckInTimePage = () => {
	const [open, setOpen] = useState(false);

	const updateCheckInTime = useStoreSelector(
		(state) => state.updateCheckInTime,
	);

	const checkInTime = useStoreSelector((state) => state.checkInTime);
	return (
		<StepperPage
			bubbleTextConfig={{
				imageConfig: {
					source: require("@/assets/images/smoqui_note.png"),
					width: 150,
					height: 150,
				},
				text: "Wann möchtest Du einchecken?",
			}}
		>
			<View>
				<SizableText size="$8">Dein Zeitpunkt</SizableText>
				<Button size="$8" onPress={() => setOpen(true)}>
					{checkInTime
						? `${formatTime(new Date(checkInTime))} Uhr`
						: "Zeitpunkt festlegen"}
				</Button>
				{checkInTime && (
					<Button
						onPress={async () => {
							updateCheckInTime(undefined);
						}}
						size="$5"
						variant="ghost"
						alignSelf="flex-end"
					>
						Zeitpunkt löschen
					</Button>
				)}
			</View>
			{Platform.OS === "android" ? (
				<DateTimePicker
					open={open}
					onOpenChange={setOpen}
					mode="time"
					value={new Date(checkInTime ?? new Date())}
					onChange={(_, date) => updateCheckInTime(date)}
				/>
			) : (
				<DateTimePickerDialog
					dialogProps={{ open, onOpenChange: setOpen }}
					pickerProps={{
						mode: "time",
						display: "default",
						onDateChange: (date) => {
							updateCheckInTime(date);
						},
						style: {
							width: "100%",
							height: 100,
						},
						value: new Date(checkInTime ?? new Date()),
					}}
				/>
			)}
		</StepperPage>
	);
};
