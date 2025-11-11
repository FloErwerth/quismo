import { useTranslation } from "react-i18next";
import { SizableText } from "tamagui";
import { SelectableOptions } from "@/components/SelectableOptions/SelectableOptions";
import { StepperPage } from "@/components/Stepper/StepperPage";
import {
	type Concern,
	getConcernOptions,
} from "@/config/motivationAndConcerns";
import { useStoreSelector } from "@/storage/storage";

export const OnboardingConcernsPage = () => {
	const { t } = useTranslation();
	const concerns = useStoreSelector((state) => state.concerns);
	const addConcern = useStoreSelector((state) => state.addConcern);
	const removeConcern = useStoreSelector((state) => state.removeConcern);

	const handleToggleConcern = (concern: Concern) => {
		if (concerns.includes(concern)) {
			removeConcern(concern);
		} else {
			addConcern(concern);
		}
	};

	const selectabledItems = Object.values(getConcernOptions(t)).map(
		(concern) => ({
			id: concern.id,
			label: concern.label,
			isSelected: concerns.includes(concern.id),
		}),
	);

	return (
		<StepperPage
			nextButtonText={
				concerns.length === 0
					? t("onboarding.concerns.selectedCount")
					: undefined
			}
			bubbleTextConfig={{
				imageConfig: {
					source: require("@/assets/images/smoqui_note.png"),
					width: 150,
					height: 150,
				},
				arrowPosition: "right",
				text: t("onboarding.concerns.title"),
			}}
		>
			<SizableText size="$6" textAlign="center">
				{t("onboarding.concerns.hint")}
			</SizableText>
			<SelectableOptions
				disabled={concerns.length >= 3}
				items={selectabledItems}
				onSelect={(item) => handleToggleConcern(item.id as Concern)}
			/>
		</StepperPage>
	);
};
