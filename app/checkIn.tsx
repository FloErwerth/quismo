import { Image } from "expo-image";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import Animated, { useSharedValue, withTiming } from "react-native-reanimated";
import { AnimatePresence, SizableText, View, XStack } from "tamagui";
import { GradientBackground } from "@/components/Backgrounds/GradientBackground";
import { ScrollableScreen } from "@/components/Screens/ScrollableScreen";
import { SelectableOptions } from "@/components/SelectableOptions/SelectableOptions";
import Slider from "@/components/Slider";
import { Stepper, useStepper } from "@/components/Stepper/Stepper";
import { StepperPage } from "@/components/Stepper/StepperPage";
import { TextBubble } from "@/components/TextBubble";
import { Button } from "@/components/tamagui/Button";
import { Card } from "@/components/tamagui/Card";
import { OnboardingInput } from "@/Screens/Onboarding/components/OnboardingInput";
import { useStoreSelector } from "@/storage/storage";

const CheckInSmokeStatusPage = () => {
	const { nextStep } = useStepper();
	return (
		<StepperPage
			previousButtonText="Check-In abbrechen"
			onPrevious={() => {
				router.back();
			}}
			hideNextButton
			title="Dein Rauchstatus"
		>
			<Image
				style={{
					width: 150,
					height: 150,
				}}
				source={require("@/assets/images/smoqui_checklist.png")}
			/>
			<SizableText>Hast Du heute eine Zigarette geraucht?</SizableText>
			<View flexDirection="row" gap="$4">
				<Card flex={1} gap="$2" onPress={() => nextStep()}>
					<SizableText size="$8">Ja!</SizableText>
					<SizableText>Ich habe heute eine Zigarette geraucht</SizableText>
				</Card>
				<Card flex={1} gap="$2" onPress={() => nextStep()}>
					<SizableText size="$8">Nein!</SizableText>
					<SizableText>Ich habe heute keine Zigarette geraucht</SizableText>
				</Card>
			</View>
		</StepperPage>
	);
};
const CheckInMoodPage = () => {
	const { nextStep } = useStepper();
	return (
		<StepperPage hideNextButton title="Deine Gefühlslage">
			<SizableText>
				Welches Emoji würde deine Laune am besten beschreiben?
			</SizableText>
			<XStack justifyContent="center" alignItems="center" flex={1}>
				<View flex={1} onPress={() => nextStep()} alignItems="center" gap="$2">
					<SizableText size="$10">🤩</SizableText>
					<SizableText>Super glücklich</SizableText>
				</View>
				<View flex={1} onPress={() => nextStep()} alignItems="center" gap="$2">
					<SizableText size="$10">😊</SizableText>
					<SizableText>Glücklich</SizableText>
				</View>
			</XStack>
			<XStack justifyContent="center" alignItems="center" flex={1}>
				<View flex={1} onPress={() => nextStep()} alignItems="center" gap="$2">
					<SizableText size="$10">😐</SizableText>
					<SizableText>Neutral</SizableText>
				</View>
				<View flex={1} onPress={() => nextStep()} alignItems="center" gap="$2">
					<SizableText size="$10">😕</SizableText>
					<SizableText>Unzufrieden</SizableText>
				</View>
			</XStack>
			<XStack justifyContent="center" alignItems="center" flex={1}>
				<View flex={1} onPress={() => nextStep()} alignItems="center" gap="$2">
					<SizableText size="$10">😟</SizableText>
					<SizableText>Traurig</SizableText>
				</View>
				<View flex={1} onPress={() => nextStep()} alignItems="center" gap="$2">
					<SizableText size="$10">😡</SizableText>
					<SizableText>Wütend</SizableText>
				</View>
			</XStack>
		</StepperPage>
	);
};

const CheckInWhyMoodPage = () => {
	const [text, setText] = useState<string | undefined>(undefined);
	const opacity = useSharedValue(1);

	useEffect(() => {
		opacity.value = withTiming(text?.length === 0 ? 1 : 0, { duration: 300 });
	}, [text, opacity]);

	return (
		<StepperPage title="Warum fühlst Du dich traurig?">
			<OnboardingInput
				multiline
				autoFocus
				numberOfLines={4}
				verticalAlign="top"
				value={text}
				onChangeText={setText}
			/>
			<Animated.View style={{ opacity: opacity }}>
				<SelectableOptions
					items={[
						{
							label: "Ich bin traurig, weil...",
							id: "traurig",
							isSelected: false,
						},
						{
							label: "Die Situation war...",
							id: "situation",
							isSelected: false,
						},
						{
							label: "Mir ist eingefallen, dass...",
							id: "ueberlegung",
							isSelected: false,
						},
					]}
					onSelect={(item) => setText(item.label.replace("...", " "))}
				/>
			</Animated.View>
		</StepperPage>
	);
};

const CheckInConfidencePage = () => {
	return (
		<StepperPage nextButtonText="Zuversicht speichern" title="Deine Zuversicht">
			<SizableText>
				Wie zuversichtlich bist Du, dass Du heute dem Rauchen widerstehen
				kannst?
			</SizableText>
			<Slider
				onValueChange={(value) => console.log("value changed", value)}
				maxValue={100}
				initialValue={0}
			/>
		</StepperPage>
	);
};

const FirstCheckIn = () => {
	const hasSeenWelcomeDialog = useStoreSelector(
		(state) => state.hasSeenWelcomeDialog,
	);

	const updateHasSeenWelcomeDialog = useStoreSelector(
		(state) => state.updateHasSeenWelcomeDialog,
	);

	if (hasSeenWelcomeDialog) {
		return null;
	}

	return (
		<View
			key="first-check-in"
			position="absolute"
			top={0}
			left={0}
			right={0}
			bottom={0}
			flex={1}
			zIndex={1}
			animation="medium"
			enterStyle={{ y: 0 }}
			exitStyle={{ y: -1000 }}
		>
			<ScrollableScreen>
				<XStack left="$-4">
					<Image
						source={require("@/assets/images/smoqui_checklist.png")}
						style={{ width: 150, height: 150 }}
					/>
					<TextBubble
						text="Willkommen zu deinem ersten Check-In!"
						arrowTopPercentage={30}
						arrowPosition="left"
					/>
				</XStack>
				<View gap="$4">
					<SizableText size="$8">
						Bei einem Check-In wird dein aktueller Rauchstatus, deine
						Gefühlslage und deine Zuversicht abgefragt.
					</SizableText>
					<SizableText size="$8">
						Dies dient der Selbstreflextion und Hilft Dir beim Rauchstopp
					</SizableText>
					<SizableText size="$8">
						Deine Check-Ins kannst Du in deinem Kalender aufrufen und die
						Auswertung ansehen.
					</SizableText>
				</View>
				<View flex={1} />
				<Button
					size="$8"
					onPress={() => {
						updateHasSeenWelcomeDialog(true);
					}}
				>
					Check-In starten
				</Button>
			</ScrollableScreen>
		</View>
	);
};

export default function CheckIn() {
	const hasSeenWelcomeDialog = useStoreSelector(
		(state) => state.hasSeenWelcomeDialog,
	);
	const updateHasSeenWelcomeDialog = useStoreSelector(
		(state) => state.updateHasSeenWelcomeDialog,
	);

	return (
		<GradientBackground>
			<AnimatePresence>
				{!hasSeenWelcomeDialog && <FirstCheckIn />}
			</AnimatePresence>
			<Stepper>
				<CheckInSmokeStatusPage />
				<CheckInMoodPage />
				<CheckInWhyMoodPage />
				<CheckInConfidencePage />
			</Stepper>
			<Button
				onPress={() => {
					updateHasSeenWelcomeDialog(false);
				}}
				size="$8"
			>
				reset
			</Button>
		</GradientBackground>
	);
}
