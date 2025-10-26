import { Check, ChevronRight } from "@tamagui/lucide-icons";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { Card, SizableText, View, XStack } from "tamagui";
import { Progress } from "@/components/tamagui/Progress";
import { usePreperationStore } from "@/storage/phaseStorage";
import type { PreperationType } from "@/types";

type PreperationCardProps = {
	preperationType: PreperationType;
	title: string;
	description: string;
	completed: boolean;
	onPress: () => void;
};

const PreperationCard = ({
	preperationType,
	title,
	description,
	onPress,
}: PreperationCardProps) => {
	const numberOfQuestionsAnswered = usePreperationStore((state) => {
		switch (preperationType) {
			case "motivation":
				return state.motivationAnswers.length;
			case "analysis":
				return state.analysisAnswers.length;
			case "support":
				return state.supportAnswers.length;
			case "alternative":
				return state.alternativeAnswers.length;
			default:
				return 0;
		}
	});
	const areQuestionsCompleted = numberOfQuestionsAnswered === 2;

	return (
		<Card
			padded
			elevate
			gap="$4"
			onPress={onPress}
			pressStyle={{ opacity: 0.8 }}
		>
			<XStack flex={1} justifyContent="space-between">
				<XStack flex={1} alignItems="center" gap="$4">
					<View flex={1}>
						<SizableText size="$8">{title}</SizableText>
						<SizableText flex={1}>{description}</SizableText>
					</View>
					<View>
						{areQuestionsCompleted ? (
							<Check />
						) : (
							<SizableText color="$gray9Light" size="$6">
								{numberOfQuestionsAnswered} / 2
							</SizableText>
						)}
					</View>
					<ChevronRight />
				</XStack>
			</XStack>
			<Progress value={(100 * numberOfQuestionsAnswered) / 2} />
		</Card>
	);
};

export const PreperationQuestionCards = () => {
	const { t } = useTranslation();
	return (
		<View gap="$2">
			<SizableText size="$6">
				{t("home.phasesCard.preperation.questions.title")}
			</SizableText>
			<PreperationCard
				preperationType="motivation"
				onPress={() => {
					router.push("/preperationMotivation");
				}}
				title={t("home.phasesCard.preperation.questions.motivation.title")}
				description={t(
					"home.phasesCard.preperation.questions.motivation.description",
				)}
				completed={false}
			/>
			<PreperationCard
				preperationType="analysis"
				onPress={() => router.push("/preperationAnalysis")}
				title={t("home.phasesCard.preperation.questions.analysis.title")}
				description={t(
					"home.phasesCard.preperation.questions.analysis.description",
				)}
				completed={false}
			/>
			<PreperationCard
				preperationType="support"
				onPress={() => router.push("/preperationSupport")}
				title={t("home.phasesCard.preperation.questions.support.title")}
				description={t(
					"home.phasesCard.preperation.questions.support.description",
				)}
				completed={false}
			/>
			<PreperationCard
				preperationType="alternative"
				onPress={() => router.push("/preperationAlternatives")}
				title={t("home.phasesCard.preperation.questions.alternative.title")}
				description={t(
					"home.phasesCard.preperation.questions.alternative.description",
				)}
				completed={false}
			/>
		</View>
	);
};
