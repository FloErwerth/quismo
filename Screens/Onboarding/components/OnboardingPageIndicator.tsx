import { View, XStack } from "tamagui";

const NUMBER_OF_PAGES = 6;

type OnboardingPageIndicatorProps = {
	currentPage: number;
};
export const OnboardingPageIndicator = ({
	currentPage,
}: OnboardingPageIndicatorProps) => {
	return (
		<XStack
			backgroundColor="$color.gray5Light"
			borderRadius="$12"
			overflow="hidden"
			gap="$0.5"
			alignSelf="center"
		>
			{Array.from({ length: NUMBER_OF_PAGES }).map((_, index) => {
				const isActive = index <= currentPage;
				return (
					<View
						key={`onboarding-page-indicator-${index}`}
						width="$1"
						height="$1"
						backgroundColor={
							isActive ? "$color.green8Light" : "$color.gray5Light"
						}
					/>
				);
			})}
		</XStack>
	);
};
