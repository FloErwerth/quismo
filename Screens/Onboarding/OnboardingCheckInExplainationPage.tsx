import { Image, SizableText } from "tamagui";
import { StepperPage } from "@/components/Stepper/StepperPage";

export const OnboardingCheckInExplainationPage = () => {
	return (
		<StepperPage nextButtonText="Verstanden!">
			<Image
				source={require("@/assets/images/smoqui_clock.png")}
				width={200}
				height={165}
				alignSelf="center"
			/>
			<SizableText size="$8">
				Ein wichtiger Teil eines erfolgreichen Rauchstopps ist die regelmäßige
				Selbstreflexion
			</SizableText>
			<SizableText size="$8">
				Dazu kannst Du mit mir einen täglichen Check-In machen, an dem ich dich
				verschiedene Fragen fragen werde.
			</SizableText>
			<SizableText size="$8">
				Optimalerweise legst Du auch einen festen Zeitpunkt fest, an dem Du mit
				mir eincheckst. Das ist aber optional.
			</SizableText>
		</StepperPage>
	);
};
