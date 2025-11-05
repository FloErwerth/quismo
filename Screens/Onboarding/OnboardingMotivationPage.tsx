import { useTranslation } from "react-i18next";
import { SizableText } from "tamagui";
import { SelectableOptions } from "@/components/SelectableOptions/SelectableOptions";
import { getMotivationOptions, type Motivation } from "@/config/motivators";
import { OnboardingPage } from "@/Screens/Onboarding/components/OnboardingPage";
import {
	useMotivationsStorage,
	useMotivationsStorageSelector,
} from "@/storage/motivationsStorage";

export const OnboardingMotivationPage = () => {
	const { t } = useTranslation();
	const motivations = useMotivationsStorageSelector(
		(state) => state.motivations,
	);
	const addMotivation = useMotivationsStorage((state) => state.addMotivation);
	const removeMotivation = useMotivationsStorage(
		(state) => state.removeMotivation,
	);
	const handleToggleMotivation = (id: Motivation) => {
		if (motivations.some((currentMotivation) => currentMotivation === id)) {
			removeMotivation(id);
		} else {
			addMotivation(id);
		}
	};

	const selectabledItems = Object.values(getMotivationOptions(t)).map(
		(motivation) => ({
			id: motivation.id,
			label: motivation.label,
			isSelected: motivations.some(
				(currentMotivation) => currentMotivation === motivation.id,
			),
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
				disabled={motivations.length >= 4}
				onSelect={(item) => handleToggleMotivation(item.id)}
				flexWrap="wrap"
				items={selectabledItems}
			/>
		</OnboardingPage>
	);
};
