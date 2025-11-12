import { Image, SizableText, XStack } from "tamagui";
import { StepperPage } from "@/components/Stepper/StepperPage";
import { TextBubble } from "@/components/TextBubble";
import { Button } from "@/components/tamagui/Button";
import { registerForPushNotificationsAsync } from "@/notifications/registerForNotifications";
import { useStoreSelector } from "@/storage/storage";

export const OnboardingNotificationsPage = () => {
	const updateNotificationsEnabled = useStoreSelector(
		(state) => state.updateNotificationsEnabled,
	);
	return (
		<StepperPage>
			<XStack gap="$2">
				<Image
					source={require("@/assets/images/smoqui_notifications.png")}
					width={140}
					height={110}
				/>
				<TextBubble
					text="Erinnerungen aktivieren?"
					arrowTopPercentage={50}
					arrowPosition="left"
				/>
			</XStack>
			<SizableText size="$8">
				Damit ich dich zum Beispiel an deinen Check-In erinnern kann, müsstest
				Du deine Benachrichtigungen aktivieren.
			</SizableText>
			<Button.Floating
				onPress={async () => {
					await registerForPushNotificationsAsync();
					updateNotificationsEnabled(true);
				}}
				pressStyle={{ scale: 0.9 }}
				size="$8"
				floatingProps={{
					showShadow: false,
					width: "100%",
					doFloat: true,
					pulse: true,
				}}
			>
				<SizableText textAlign="center" size="$8">
					Aktivieren
				</SizableText>
			</Button.Floating>
		</StepperPage>
	);
};
