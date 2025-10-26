import { useTranslation } from "react-i18next";
import { SizableText } from "tamagui";
import { SelectableOptions } from "@/components/SelectableOptions/SelectableOptions";
import { getMotivationOptions, type Motivation } from "@/config/preperation";
import { OnboardingPage } from "@/Screens/Onboarding/components/OnboardingPage";
import { useStore } from "@/storage/storage";

export const OnboardingMotivationPage = () => {
	const { t } = useTranslation();
	const motivations = useStore((state) => state.motivations);
	const addMotivation = useStore((state) => state.addMotivation);
	const removeMotivation = useStore((state) => state.removeMotivation);

	const handleToggleMotivation = (id: Motivation) => {
		if (motivations.includes(id)) {
			removeMotivation(id);
		} else {
			addMotivation(id);
		}
	};

	const selectabledItems = Object.values(getMotivationOptions(t)).map(
		(motivation) => ({
			id: motivation.id,
			label: motivation.label,
			isSelected: motivations.includes(motivation.id),
		}),
	);

	return (
		<OnboardingPage
			nextButtonDisabled={motivations.length <= 0}
			nextButtonText={
				motivations.length === 0
					? t("onboarding.motivation.selectedCount", {
							count: motivations.length,
							total: 1,
						})
					: undefined
			}
			title={t("onboarding.motivation.title")}
		>
			<SizableText>{t("onboarding.motivation.description")}</SizableText>
			<SelectableOptions
				onSelect={(item) => handleToggleMotivation(item.id)}
				flexWrap="wrap"
				items={selectabledItems}
			/>
		</OnboardingPage>
	);
};
