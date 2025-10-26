import { HelpCircle } from "@tamagui/lucide-icons";
import { router } from "expo-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Pressable } from "react-native";
import { Card, SizableText, View, XStack } from "tamagui";
import { Progress } from "@/components/tamagui/Progress";
import { usePreperationStore } from "@/storage/phaseStorage";

export const PreperationPhaseCard = () => {
	const [helpSheetOpen, setHelpSheetOpen] = useState(false);
	const { t } = useTranslation();
	const motivationQuestionsAnswered = usePreperationStore(
		(state) => state.motivationAnswers.length > 2,
	);
	const analysisQuestionsAnswered = usePreperationStore(
		(state) => state.analysisAnswers.length > 2,
	);
	const supportQuestionsAnswered = usePreperationStore(
		(state) => state.supportAnswers.length > 2,
	);
	const alternativeQuestionsAnswered = usePreperationStore(
		(state) => state.alternativeAnswers.length > 2,
	);

	const numberOfQuestionsAnswered =
		Number(motivationQuestionsAnswered) +
		Number(analysisQuestionsAnswered) +
		Number(supportQuestionsAnswered) +
		Number(alternativeQuestionsAnswered);

	return (
		<Card padded elevate gap="$4">
			<XStack>
				<View flex={1}>
					<SizableText size="$6" color="$blue11Light">
						{t("common.phases.preperation.naming.short")}
					</SizableText>
					<SizableText size="$8">
						{t("home.phasesCard.preperation.title")}
					</SizableText>
				</View>
				<Pressable onPress={() => router.push("/preperationHelp")}>
					<HelpCircle />
				</Pressable>
			</XStack>
			<Progress value={(100 * numberOfQuestionsAnswered) / 4} />
			<SizableText>
				{t("home.phasesCard.preperation.doneSteps", {
					steps: numberOfQuestionsAnswered,
					total: 4,
				})}
			</SizableText>
		</Card>
	);
};
