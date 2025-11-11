import { Image } from "expo-image";
import type { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import { Dimensions } from "react-native";
import Animated, {
	type EntryExitAnimationFunction,
	withDelay,
	withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SizableText, View, XStack } from "tamagui";
import { ScrollView } from "@/components/ScrollView/ScrollView";
import { useStepper } from "@/components/Stepper/Stepper";
import { TextBubble } from "@/components/TextBubble";
import { Button } from "@/components/tamagui/Button";

export type StepperPageProps = {
	title?: string;
	hideNextButton?: boolean;
	onNext?: () => Promise<void>;
	onPrevious?: () => void;
	nextButtonText?: string;
	previousButtonText?: string;
	nextButtonDisabled?: boolean;
	nextButtonIsLoadingButton?: boolean;
	hidePreviousButton?: boolean;
	bubbleTextConfig?: {
		imageConfig?: {
			source: string;
			width: number;
			height: number;
		};
		arrowTopPercentage?: number;
		arrowPosition?: "left" | "right";
		text: string;
	};
} & PropsWithChildren;

const WIDTH = Dimensions.get("window").width;

const ANIMATION_DURATION = 250;

const forwardEnteringAnimation: EntryExitAnimationFunction = () => {
	"worklet";
	const animations = {
		opacity: withDelay(
			ANIMATION_DURATION / 4,
			withTiming(1, { duration: ANIMATION_DURATION }),
		),
		transform: [{ scale: withTiming(1, { duration: ANIMATION_DURATION }) }],
	};
	const initialValues = {
		opacity: 0,
		transform: [{ scale: 0.85 }],
	};
	return {
		initialValues,
		animations,
	};
};

const forwardExitingAnimation: EntryExitAnimationFunction = (values: {
	currentOriginX: number;
}) => {
	"worklet";
	const animations = {
		originX: withTiming(-2 * WIDTH, { duration: ANIMATION_DURATION }),
	};
	const initialValues = {
		originX: values.currentOriginX,
	};
	return {
		initialValues,
		animations,
	};
};

const backwardEnteringAnimation: EntryExitAnimationFunction = () => {
	"worklet";
	const animations = {
		opacity: withDelay(
			ANIMATION_DURATION / 4,
			withTiming(1, { duration: ANIMATION_DURATION }),
		),
		transform: [{ scale: withTiming(1, { duration: ANIMATION_DURATION }) }],
	};
	const initialValues = {
		opacity: 0,
		transform: [{ scale: 1.15 }],
	};
	return {
		initialValues,
		animations,
	};
};

const backwardExitingAnimation: EntryExitAnimationFunction = (values: {
	currentOriginX: number;
}) => {
	"worklet";
	const animations = {
		originX: withTiming(2 * WIDTH, { duration: ANIMATION_DURATION }),
	};
	const initialValues = {
		originX: values.currentOriginX,
	};
	return {
		initialValues,
		animations,
	};
};

const BubbleText = (config: StepperPageProps["bubbleTextConfig"]) => {
	if (!config) {
		return null;
	}
	const {
		imageConfig,
		text,
		arrowTopPercentage = 60,
		arrowPosition = "right",
	} = config;
	return (
		<XStack>
			<TextBubble
				text={text}
				arrowTopPercentage={arrowTopPercentage}
				arrowPosition={arrowPosition}
			/>
			{imageConfig && (
				<Image
					source={imageConfig.source}
					style={{ width: imageConfig.width, height: imageConfig.height }}
				/>
			)}
		</XStack>
	);
};

export const StepperPage = ({
	title,
	nextButtonText,
	previousButtonText,
	nextButtonDisabled,
	nextButtonIsLoadingButton,
	hidePreviousButton,
	onNext,
	onPrevious,
	hideNextButton,
	bubbleTextConfig,
	...props
}: StepperPageProps) => {
	const { t } = useTranslation();
	const defaultNextButtonText = t("common.next");
	const defaultPreviousButtonText = t("common.previous");
	const { nextStep, previousStep, direction } = useStepper();
	const { top } = useSafeAreaInsets();

	const handleNext = async () => {
		try {
			await onNext?.();
			nextStep();
		} catch (error) {
			console.error(error);
		}
	};

	const handlePrevious = async () => {
		try {
			await onPrevious?.();
			previousStep();
		} catch (error) {
			console.error(error);
		}
	};

	const durationBasedAnimations = (() => {
		if (direction === "forward") {
			return {
				entering: forwardEnteringAnimation,
				exiting: forwardExitingAnimation,
			};
		}
		return {
			entering: backwardEnteringAnimation,
			exiting: backwardExitingAnimation,
		};
	})();

	return (
		<Animated.View style={{ flex: 1 }} {...durationBasedAnimations}>
			<View gap="$5" flex={1}>
				<ScrollView
					keyboardShouldPersistTaps="handled"
					contentContainerStyle={{
						flexGrow: 1,
						padding: 16,
						paddingTop: top || 16,
						gap: 16,
					}}
				>
					{!hidePreviousButton && (
						<Button.Debounced
							alignSelf="flex-start"
							variant="ghost"
							padding="$2"
							size="$6"
							onPress={handlePrevious}
						>
							{previousButtonText ?? defaultPreviousButtonText}
						</Button.Debounced>
					)}
					{bubbleTextConfig && <BubbleText {...bubbleTextConfig} />}
					{title && <SizableText size="$10">{title}</SizableText>}
					{props.children}
					<View flex={1} />
					<View gap="$2">
						{!hideNextButton && (
							<Button.Debounced
								variant="secondary"
								size="$6"
								onPress={handleNext}
								disabled={nextButtonDisabled}
							>
								{nextButtonText ?? defaultNextButtonText}
							</Button.Debounced>
						)}
					</View>
				</ScrollView>
			</View>
		</Animated.View>
	);
};
