import { Image } from "expo-image";
import { router } from "expo-router";
import {
	createContext,
	type PropsWithChildren,
	useContext,
	useEffect,
	useState,
} from "react";
import Animated, { useSharedValue, withTiming } from "react-native-reanimated";
import { AnimatePresence, SizableText, View, XStack } from "tamagui";
import { GradientBackground } from "@/components/Backgrounds/GradientBackground";
import { ScrollableScreen } from "@/components/Screens/ScrollableScreen";
import { SelectableOptions } from "@/components/SelectableOptions/SelectableOptions";
import Slider from "@/components/Slider";
import { Stepper, useStepper } from "@/components/Stepper/Stepper";
import { StepperPage } from "@/components/Stepper/StepperPage";
import { TextBubble } from "@/components/TextBubble";
import { AlarmDialog } from "@/components/tamagui/AlarmDialog";
import { Button } from "@/components/tamagui/Button";
import { Card } from "@/components/tamagui/Card";
import { Input } from "@/components/tamagui/Input";
import { OnboardingInput } from "@/Screens/Onboarding/components/OnboardingInput";
import { useStoreSelector } from "@/storage/storage";

type CheckInState = {
	smokeStatus: "smoked" | "notSmoked" | undefined;
	mood: "happy" | "sad" | "neutral" | "angry" | undefined;
	confidence: number | undefined;
	setSmokeStatus: (smokeStatus: "smoked" | "notSmoked") => void;
	setMood: (mood: "happy" | "sad" | "neutral" | "angry") => void;
	setConfidence: (confidence: number) => void;
};

const CheckInContext = createContext<CheckInState | undefined>(undefined);

const CheckInProvider = ({ children }: PropsWithChildren) => {
	const setSmokeStatus = (smokeStatus: "smoked" | "notSmoked") => {
		setCheckInState((prev) => ({ ...prev, smokeStatus }));
	};

	const setMood = (mood: "happy" | "sad" | "neutral" | "angry") => {
		setCheckInState((prev) => ({ ...prev, mood }));
	};

	const setConfidence = (confidence: number) => {
		setCheckInState((prev) => ({ ...prev, confidence }));
	};

	const [checkInState, setCheckInState] = useState<CheckInState>({
		smokeStatus: undefined,
		mood: undefined,
		confidence: undefined,
		setSmokeStatus,
		setMood,
		setConfidence,
	});

	return (
		<CheckInContext.Provider value={checkInState}>
			{children}
		</CheckInContext.Provider>
	);
};

const useCheckInProvider = () => {
	const context = useContext(CheckInContext);
	if (!context) {
		throw new Error("useCheckInProvider must be used within a CheckInProvider");
	}
	return context;
};

const CheckInSmokeStatusPage = () => {
	const { nextStep } = useStepper();
	const { setSmokeStatus } = useCheckInProvider();

	const handleHasSmoked = () => {
		setSmokeStatus("smoked");
		nextStep();
	};

	const handleHasNotSmoked = () => {
		setSmokeStatus("notSmoked");
		nextStep();
	};

	return (
		<StepperPage
			previousButtonText="Check-In abbrechen"
			onPrevious={() => {
				router.back();
			}}
			hideNextButton
		>
			<XStack>
				<Image
					style={{
						width: 150,
						height: 120,
					}}
					source={require("@/assets/images/smoqui_checklist.png")}
				/>
				<TextBubble
					text="Hast Du heute geraucht?"
					arrowTopPercentage={50}
					arrowPosition="left"
				/>
			</XStack>

			<View flexDirection="row" gap="$4">
				<Card flex={1} gap="$2" onPress={handleHasSmoked}>
					<SizableText size="$8">Ja!</SizableText>
					<SizableText>Ich habe heute eine Zigarette geraucht</SizableText>
				</Card>
				<Card flex={1} gap="$2" onPress={handleHasNotSmoked}>
					<SizableText size="$8">Nein!</SizableText>
					<SizableText>Ich habe heute keine Zigarette geraucht</SizableText>
				</Card>
			</View>
		</StepperPage>
	);
};

const CheckInSmokeStatusResultPage = () => {
	const { smokeStatus } = useCheckInProvider();
	const [selectedReason, setSelectedReason] = useState<string[]>([]);
	const [showAddReasonModal, setShowAddReasonModal] = useState(false);

	const toggleReason = (reason: string) => {
		setSelectedReason((prev) =>
			prev.includes(reason)
				? prev.filter((r) => r !== reason)
				: [...prev, reason],
		);
	};

	if (smokeStatus === "smoked") {
		return (
			<StepperPage nextButtonText="Rückfall hinter mir lassen">
				<XStack gap="$2">
					<Image
						source={require("@/assets/images/smoqui_motivation.png")}
						style={{ width: 140, height: 120 }}
					/>
					<TextBubble
						text="Rückfälle sind normal!"
						arrowTopPercentage={50}
						arrowPosition="left"
					/>
				</XStack>
				<SizableText size="$8">
					Wichtig ist: Lass dich davon nicht entmutigen und reflektiere darüber,
					warum Du wieder geraucht hast, um Muster zu erkennen.
				</SizableText>
				<SizableText size="$8">
					Markiere nun einen oder mehrere Gründe oder schreibe selbst einen
					Grund für deinen Rückfall auf:
				</SizableText>
				<SelectableOptions
					items={[
						{
							id: "entzug",
							label: "Entzugserscheinungen",
							isSelected: selectedReason.includes("entzug"),
						},
						{
							id: "emotion",
							label: "Emotionaler Stress",
							isSelected: selectedReason.includes("emotion"),
						},
						{
							id: "habits",
							label: "Wegen Gewohnheiten",
							isSelected: selectedReason.includes("habits"),
						},
						{
							id: "social",
							label: "Soziale Situationen",
							isSelected: selectedReason.includes("social"),
						},
						{
							id: "tooSecure",
							label: '"Ich habs im Griff"',
							isSelected: selectedReason.includes("tooSecure"),
						},
					]}
					onSelect={(item) => toggleReason(item.id)}
				/>
				<Button onPress={() => setShowAddReasonModal(true)}>
					Eigenen Grund hinzufügen
				</Button>
				<AlarmDialog
					title="Rückfallgrund hinzufügen"
					open={showAddReasonModal}
					onOpenChange={setShowAddReasonModal}
					confirmButtonLabel="Grund hinzufügen"
					cancelButtonLabel="Abbrechen"
					onConfirm={() => {
						setShowAddReasonModal(false);
					}}
					onCancel={() => {
						setShowAddReasonModal(false);
					}}
				>
					<Input
						multiline
						autoFocus
						numberOfLines={4}
						verticalAlign="top"
						onChangeText={(text) => {
							setSelectedReason((prev) => [...prev, text]);
						}}
					/>
				</AlarmDialog>
			</StepperPage>
		);
	}
	return (
		<StepperPage nextButtonText="Weiter geht's!">
			<Image
				source={require("@/assets/images/smoqui_cheer.png")}
				style={{
					width: 300,
					height: 200,
					alignSelf: "center",
				}}
			/>
			<SizableText size="$8" textAlign="center">
				Gut gemacht!
			</SizableText>
			<SizableText size="$8">
				Wenn Du möchtest, dann markiere etwas, dass Dir dabei geholfen hat stark
				zu bleiben:
			</SizableText>
			<SelectableOptions
				items={[
					{
						id: "distraction",
						label: "Ablenkung",
						isSelected: selectedReason.includes("entzug"),
					},
					{
						id: "support",
						label: "Unterstützung",
						isSelected: selectedReason.includes("emotion"),
					},
					{
						id: "inhale",
						label: "Atemübungen",
						isSelected: selectedReason.includes("habits"),
					},
					{
						id: "drugs",
						label: "Medikamente oder andere Hilfsmittel",
						isSelected: selectedReason.includes("social"),
					},
				]}
				onSelect={(item) => toggleReason(item.id)}
			/>
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
	const updateHasSeenCheckInIntroduction = useStoreSelector(
		(state) => state.updateHasSeenCheckInIntroduction,
	);

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
						updateHasSeenCheckInIntroduction(true);
					}}
				>
					Check-In starten
				</Button>
			</ScrollableScreen>
		</View>
	);
};

export default function CheckIn() {
	const hasSeenCheckInIntroduction = useStoreSelector(
		(state) => state.hasSeenCheckInIntroduction,
	);

	return (
		<GradientBackground>
			<AnimatePresence>
				{!hasSeenCheckInIntroduction && <FirstCheckIn />}
			</AnimatePresence>
			<CheckInProvider>
				<Stepper>
					<CheckInSmokeStatusPage />
					<CheckInSmokeStatusResultPage />
					<CheckInMoodPage />
					<CheckInWhyMoodPage />
					<CheckInConfidencePage />
				</Stepper>
			</CheckInProvider>
		</GradientBackground>
	);
}
