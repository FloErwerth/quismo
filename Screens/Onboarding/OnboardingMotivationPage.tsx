import { useTranslation } from "react-i18next";
import { SizableText } from "tamagui";
import { SelectableOptions } from "@/components/SelectableOptions/SelectableOptions";
import { StepperPage } from "@/components/Stepper/StepperPage";
import {
	getMotivationOptions,
	type Motivation,
} from "@/config/motivationAndConcerns";
import { useStoreSelector } from "@/storage/storage";

export const OnboardingMotivationPage = () => {
	const { t } = useTranslation();
	const selectedMotivation = useStoreSelector((state) => state.motivation);
	const addMotivation = useStoreSelector((state) => state.addMotivation);
	const removeMotivation = useStoreSelector((state) => state.removeMotivation);

	const handleToggleMotivation = (id: Motivation) => {
		if (selectedMotivation === id) {
			removeMotivation(id);
		} else {
			addMotivation(id);
		}
	};

	const selectabledItems = Object.values(getMotivationOptions(t)).map(
		(motivation) => ({
			value: motivation.id,
			label: motivation.label,
		}),
	);

	return (
		<StepperPage
			nextButtonDisabled={selectedMotivation === undefined}
			nextButtonText={
				selectedMotivation === undefined
					? t("onboarding.motivation.selectedCount")
					: undefined
			}
			bubbleTextConfig={{
				imageConfig: {
					source: require("@/assets/images/smoqui_note.png"),
					width: 150,
					height: 150,
				},
				arrowPosition: "right",
				text: t("onboarding.motivation.title"),
			}}
		>
			<SizableText size="$8">
				{t("onboarding.motivation.description")}
			</SizableText>
			<SelectableOptions
				disabled={selectedMotivation !== undefined}
				onSelect={(item) => handleToggleMotivation(item.value)}
				flexWrap="wrap"
				items={selectabledItems}
			/>
		</StepperPage>
	);
};
