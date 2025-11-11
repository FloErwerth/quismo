import { GradientBackground } from "@/components/Backgrounds/GradientBackground";
import { Stepper } from "@/components/Stepper/Stepper";
import { OnboardingCheckInExplainationPage } from "@/Screens/Onboarding/OnboardingCheckInExplainationPage";
import { OnboardingCheckInTimePage } from "@/Screens/Onboarding/OnboardingCheckInTimePage";
import { OnboardingCigarettesPerBoxPage } from "@/Screens/Onboarding/OnboardingCigarettesPerBoxPage";
import { OnboardingCigarettesPerDayPage } from "@/Screens/Onboarding/OnboardingCigarettesPerDayPage";
import { OnboardingConcernsPage } from "@/Screens/Onboarding/OnboardingConcernsPage";
import { OnboardingGoodHandsPage } from "@/Screens/Onboarding/OnboardingGoodHandsPage";
import { OnboardingPaywall } from "@/Screens/Onboarding/OnboardingMotivationConcernsResultPage";
import { OnboardingMotivationNextStepsPage } from "@/Screens/Onboarding/OnboardingMotivationNextStepsPage";
import { OnboardingMotivationPage } from "@/Screens/Onboarding/OnboardingMotivationPage";
import { OnboardingNotificationsPage } from "@/Screens/Onboarding/OnboardingNotificationsPage";
import { OnboardingPersonalData } from "@/Screens/Onboarding/OnboardingPersonalData";
import { OnboardingPricePerBoxPage } from "@/Screens/Onboarding/OnboardingPricePerBoxPage";
import { OnboardingSavingsPage } from "@/Screens/Onboarding/OnboardingSavingsPage";
import { OnboardingSmokingBehaviourPreperationPage } from "@/Screens/Onboarding/OnboardingSmokingBehaviourPreperationPage";
export const OnboardingStepper = () => {
	return (
		<GradientBackground>
			<Stepper>
				<OnboardingPersonalData key="personal-data" />
				<OnboardingGoodHandsPage key="good-hands" />
				<OnboardingSmokingBehaviourPreperationPage key="smoking-behaviour-preperation" />
				<OnboardingCigarettesPerDayPage key="cigarettes-per-day" />
				<OnboardingCigarettesPerBoxPage key="cigarettes-per-box" />
				<OnboardingPricePerBoxPage key="price-per-box" />
				<OnboardingSavingsPage key="start-journey" />
				<OnboardingCheckInExplainationPage key="check-in-time" />
				<OnboardingCheckInTimePage key="check-in-time" />
				<OnboardingNotificationsPage key="notifications" />
				<OnboardingMotivationNextStepsPage key="motivation-next-steps" />
				<OnboardingMotivationPage key="motivation" />
				<OnboardingConcernsPage key="concerns" />
				<OnboardingPaywall key="motivation-concerns-result" />
			</Stepper>
		</GradientBackground>
	);
};
