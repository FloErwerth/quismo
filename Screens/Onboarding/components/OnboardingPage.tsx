import { router } from "expo-router";
import type { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import { SizableText, View } from "tamagui";
import { Button } from "@/components/tamagui/Button";
import { OnboardingPageIndicator } from "@/Screens/Onboarding/components/OnboardingPageIndicator";

type OnboardingPageProps = {
	title: string;
	onNext?: () => void;
	onPrevious?: () => void;
	nextButtonText?: string;
	previousButtonText?: string;
	nextButtonDisabled?: boolean;
	nextButtonIsLoadingButton?: boolean;
	hidePreviousButton?: boolean;
	currentPage: number;
} & PropsWithChildren;

export const OnboardingPage = ({
	title,
	onNext,
	onPrevious = () => router.replace(".."),
	nextButtonText,
	previousButtonText,
	nextButtonDisabled,
	nextButtonIsLoadingButton,
	hidePreviousButton,
	currentPage,
	...props
}: OnboardingPageProps) => {
	const { t } = useTranslation();
	const defaultNextButtonText = t("common.next");
	const defaultPreviousButtonText = t("common.previous");

	return (
		<View gap="$5" flex={1}>
			<SizableText size="$10">{title}</SizableText>
			{props.children}
			<View flex={1} />
			<OnboardingPageIndicator currentPage={currentPage} />
			<View gap="$2">
				<Button size="$5" onPress={onNext} disabled={nextButtonDisabled}>
					{nextButtonText ?? defaultNextButtonText}
				</Button>

				{!hidePreviousButton && onPrevious && (
					<Button variant="outlined" size="$5" onPress={onPrevious}>
						{previousButtonText ?? defaultPreviousButtonText}
					</Button>
				)}
			</View>
		</View>
	);
};
