import type { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import { Dimensions } from "react-native";
import Animated, {
	type EntryExitAnimationFunction,
	withDelay,
	withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SizableText, View } from "tamagui";
import { ScrollView } from "@/components/ScrollView/ScrollView";
import { useStepper } from "@/components/Stepper/Stepper";
import { Button } from "@/components/tamagui/Button";

type OnboardingPageProps = {
	title: string;
	onNext?: () => void;
	onPrevious?: () => void;
	nextButtonText?: string;
	previousButtonText?: string;
	nextButtonDisabled?: boolean;
	nextButtonIsLoadingButton?: boolean;
	hidePreviousButton?: boolean;
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

export const OnboardingPage = ({
	title,
	nextButtonText,
	previousButtonText,
	nextButtonDisabled,
	nextButtonIsLoadingButton,
	hidePreviousButton,
	onNext,
	onPrevious,
	...props
}: OnboardingPageProps) => {
	const { t } = useTranslation();
	const defaultNextButtonText = t("common.next");
	const defaultPreviousButtonText = t("common.previous");
	const { nextStep, previousStep, direction } = useStepper();
	const { top } = useSafeAreaInsets();

	const handleNext = () => {
		onNext?.();
		nextStep();
	};

	const handlePrevious = () => {
		onPrevious?.();
		previousStep();
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
					<SizableText size="$10">{title}</SizableText>
					{props.children}
					<View flex={1} />
					<Button.Debounced
						size="$5"
						onPress={handleNext}
						disabled={nextButtonDisabled}
					>
						{nextButtonText ?? defaultNextButtonText}
					</Button.Debounced>
					{!hidePreviousButton && (
						<Button.Debounced
							variant="outlined"
							size="$5"
							onPress={handlePrevious}
						>
							{previousButtonText ?? defaultPreviousButtonText}
						</Button.Debounced>
					)}
				</ScrollView>
			</View>
		</Animated.View>
	);
};
