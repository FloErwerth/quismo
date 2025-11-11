import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { StepperPage } from "@/components/Stepper/StepperPage";
import { OnboardingInput } from "@/Screens/Onboarding/components/OnboardingInput";
import { useStoreSelector } from "@/storage/storage";

export const OnboardingPersonalData = () => {
	const updateName = useStoreSelector((state) => state.updateName);
	const name = useStoreSelector((state) => state.name);
	const { t } = useTranslation();

	const handleNameChange = (text: string) => {
		const trimmedText = text.trim();
		if (trimmedText.length === 0) {
			updateName("");
			return;
		}
		updateName(text);
	};

	return (
		<StepperPage
			onPrevious={() => router.navigate("/")}
			nextButtonDisabled={name === undefined || name.length === 0}
			bubbleTextConfig={{
				imageConfig: {
					source: require("@/assets/images/smoqui_note.png"),
					width: 150,
					height: 125,
				},
				text: t("onboarding.personalData.title"),
			}}
		>
			<OnboardingInput
				label={t("common.name")}
				value={name}
				onChangeText={handleNameChange}
				autoComplete="given-name"
			/>
		</StepperPage>
	);
};
