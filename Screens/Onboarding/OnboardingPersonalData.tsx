import { useTranslation } from "react-i18next";
import { OnboardingInput } from "@/Screens/Onboarding/components/OnboardingInput";
import { OnboardingPage } from "@/Screens/Onboarding/components/OnboardingPage";
import { useStore } from "@/storage/storage";

export const OnboardingPersonalData = () => {
	const updateName = useStore((state) => state.updateName);
	const name = useStore((state) => state.name);
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
		<OnboardingPage
			nextButtonDisabled={name === undefined || name.length === 0}
			title={t("onboarding.personalData.title")}
		>
			<OnboardingInput
				label={t("common.name")}
				subLabel={t("onboarding.personalData.nameExplanation")}
				value={name}
				onChangeText={handleNameChange}
			/>
		</OnboardingPage>
	);
};
