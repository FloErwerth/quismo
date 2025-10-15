import { router } from "expo-router";
import type { PropsWithChildren } from "react";
import { SizableText, View } from "tamagui";
import { Button } from "@/components/tamagui/Button";

type OnboardingPageProps = {
	title: string;
	onNext?: () => void;
	onPrevious?: () => void;
	nextButtonText?: string;
	previousButtonText?: string;
	nextButtonDisabled?: boolean;
	hidePreviousButton?: boolean;
} & PropsWithChildren;

export const OnboardingPage = ({
	title,
	onNext,
	onPrevious = () => router.replace(".."),
	nextButtonText = "Weiter",
	previousButtonText = "Zurück",
	nextButtonDisabled,
	hidePreviousButton,
	...props
}: OnboardingPageProps) => {
	return (
		<View gap="$5" flex={1}>
			<SizableText size="$10">{title}</SizableText>
			{props.children}
			<View flex={1} />
			<View gap="$2">
				<Button size="$5" onPress={onNext} disabled={nextButtonDisabled}>
					{nextButtonText}
				</Button>
				{!hidePreviousButton && onPrevious && (
					<Button variant="outlined" size="$5" onPress={onPrevious}>
						{previousButtonText}
					</Button>
				)}
			</View>
		</View>
	);
};
