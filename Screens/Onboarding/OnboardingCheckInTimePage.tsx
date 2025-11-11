import { useState } from "react";
import { SizableText } from "tamagui";
import { DateTimePickerDialog } from "@/components/DateTimePicker/DatePickerDialog";
import { StepperPage } from "@/components/Stepper/StepperPage";
import { Button } from "@/components/tamagui/Button";

export const OnboardingCheckInTimePage = () => {
	const [open, setOpen] = useState(false);
	return (
		<StepperPage
			bubbleTextConfig={{
				imageConfig: {
					source: require("@/assets/images/smoqui_clock.png"),
					width: 150,
					height: 150,
				},
				text: "Wann willst Du einchecken?",
			}}
		>
			<SizableText size="$8">
				Ein wichtiger Teil eines erfolgreichen Rauchstopps ist die regelmäßige
				Selbstreflexion
			</SizableText>
			<SizableText size="$8">
				Du kannst nun einen Zeitpunkt festlegen, zu dem Du täglich eincheckst.
				Der Zeitpunkt ist optional und kann jederzeit angepasst werden.
			</SizableText>
			<Button size="$8" onPress={() => setOpen(true)}>
				Zeitpunkt festlegen
			</Button>
			<DateTimePickerDialog
				dialogProps={{ open, onOpenChange: setOpen }}
				pickerProps={{
					mode: "time",
					display: "default",
					onDateChange: (date) => {
						console.log(date);
					},
					style: {
						width: "100%",
						height: 100,
					},
					value: new Date(),
				}}
			/>
		</StepperPage>
	);
};
