import { GradientBackground } from "@/components/Screens/GradientBackground";
import { Stepper } from "@/components/Stepper/Stepper";
import { OnboardingCigarettesPerBoxPage } from "@/Screens/Onboarding/OnboardingCigarettesPerBoxPage";
import { OnboardingCigarettesPerDayPage } from "@/Screens/Onboarding/OnboardingCigarettesPerDayPage";
import { OnboardingMethodScreen } from "@/Screens/Onboarding/OnboardingMethodScreen";
import { OnboardingMotivationPage } from "@/Screens/Onboarding/OnboardingMotivationPage";
import { OnboardingPersonalData } from "@/Screens/Onboarding/OnboardingPersonalData";
import { OnboardingPricePerBoxPage } from "@/Screens/Onboarding/OnboardingPricePerBoxPage";
import { OnboardingStartJourneyPage } from "@/Screens/Onboarding/OnboardingStartJourneyPage";

export const OnboardingStepper = () => {
	return (
		<GradientBackground>
			<Stepper>
				<OnboardingMethodScreen key="method" />
				<OnboardingPersonalData key="personal-data" />
				<OnboardingCigarettesPerDayPage key="cigarettes-per-day" />
				<OnboardingCigarettesPerBoxPage key="cigarettes-per-box" />
				<OnboardingPricePerBoxPage key="price-per-box" />
				<OnboardingMotivationPage key="motivation" />
				<OnboardingStartJourneyPage key="start-journey" />
			</Stepper>
		</GradientBackground>
	);
};
