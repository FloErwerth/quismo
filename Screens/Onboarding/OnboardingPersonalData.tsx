import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { View } from "tamagui";
import { ScrollableScreen } from "@/components/Screens/ScrollableScreen";
import { OnboardingInput } from "@/Screens/Onboarding/components/OnboardingInput";
import { OnboardingPage } from "@/Screens/Onboarding/components/OnboardingPage";
import { useStore } from "@/storage";

export const OnboardingPersonalData = () => {
	const updateName = useStore((state) => state.updateName);
	const name = useStore((state) => state.name);
	const { t } = useTranslation();

	const navigateToNumberOfCigarettesPerDayPage = () => {
		if (!name) {
			return;
		}
		router.push("/onboarding/numberOfCigarettesPerDayPage");
	};

	return (
		<ScrollableScreen flex={1}>
			<View gap="$6" flex={1}>
				<OnboardingPage
					currentPage={1}
					nextButtonDisabled={!name}
					onNext={navigateToNumberOfCigarettesPerDayPage}
					title={t("onboarding.personalData.title")}
				>
					<OnboardingInput
						label={t("common.name")}
						subLabel={t("onboarding.personalData.nameExplanation")}
						value={name}
						onChangeText={updateName}
					/>
				</OnboardingPage>
			</View>
		</ScrollableScreen>
	);
};
