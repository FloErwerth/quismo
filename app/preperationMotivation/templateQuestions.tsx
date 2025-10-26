import { MinusCircle, PlusCircle } from "@tamagui/lucide-icons";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Pressable, SectionList, TouchableOpacity } from "react-native";
import { Card, Separator, SizableText, View, XStack } from "tamagui";
import { QuickFilter } from "@/components/QuickFilter/QuickFilter";
import { GradientBackground } from "@/components/Screens/GradientBackground";
import { Screen } from "@/components/Screens/Screen";
import {
	getPreperatonQuestions,
	type PreperationQuestionCategory,
} from "@/config/preperation";
import { usePreperationStore } from "@/storage/phaseStorage";
import type { PreperationType } from "@/types";

export default function TemplateQuestions() {
	const { t } = useTranslation();
	const { type } = useLocalSearchParams<{ type: PreperationType }>();

	const removeAnswerFromStore = usePreperationStore((state) => {
		switch (type) {
			case "motivation":
				return state.removeMotivationAnswer;
			case "analysis":
				return state.removeAnalysisAnswer;
			case "support":
				return state.removeSupportAnswer;
			case "alternative":
				return state.removeAlternativeAnswer;
		}
	});

	const addAnswerToStore = usePreperationStore((state) => {
		switch (type) {
			case "motivation":
				return state.addMotivationAnswer;
			case "analysis":
				return state.addAnalysisAnswer;
			case "support":
				return state.addSupportAnswer;
			case "alternative":
				return state.addAlternativeAnswer;
		}
	});

	const savedQuestions = usePreperationStore((state) => {
		switch (type) {
			case "motivation":
				return state.motivationAnswers;
			case "analysis":
				return state.analysisAnswers;
			case "support":
				return state.supportAnswers;
			case "alternative":
				return state.alternativeAnswers;
		}
	});

	const questions = getPreperatonQuestions(t)[type];

	const [categoryFilter, setCategoryFilter] = useState<
		PreperationQuestionCategory[]
	>([]);

	const sections = Object.entries(questions)
		.filter(([key]) => {
			if (!categoryFilter.length) {
				return true;
			}
			return categoryFilter.includes(key as PreperationQuestionCategory);
		})
		.map(([key, value]) => ({
			id: key,
			title: value.title,
			data: value.questions.map((question) => ({
				question: question.question,
				id: question.id,
			})),
		}));

	const quickFilterOptions = Object.entries(questions).map(([_, value]) => ({
		id: value.id,
		label: value.title,
	}));

	const selectableQuickFilterItems = quickFilterOptions.map((item) => ({
		...item,
		isSelected: categoryFilter.includes(item.id),
	}));

	const toggleFilter = (id: PreperationQuestionCategory) => {
		setCategoryFilter((filter) => {
			const newFilter = [...filter];
			if (filter.includes(id)) {
				return newFilter.filter((item) => item !== id);
			} else {
				newFilter.push(id);
				return newFilter;
			}
		});
	};

	const handleSelectQuestion = (id: string) => {
		if (savedQuestions.some((question) => question.id === id)) {
			removeAnswerFromStore(id);
		} else {
			addAnswerToStore({ id, answer: "" });
		}
	};

	return (
		<GradientBackground>
			<Screen title="Fragen wählen" back flex={1}>
				<View marginHorizontal="$-4" gap="$4" flex={1}>
					<QuickFilter
						items={selectableQuickFilterItems}
						onSelect={(item) => toggleFilter(item.id)}
						contentOffset={{ x: -20, y: 0 }}
						contentInset={{ left: 20, right: 20 }}
						height="$5"
					/>
					<SectionList
						contentContainerStyle={{ paddingBottom: 20, flexGrow: 1 }}
						sections={sections}
						renderItem={({ item: { question, id } }) => (
							<Pressable onPress={() => handleSelectQuestion(id)}>
								<XStack
									padding="$4"
									alignItems="center"
									justifyContent="space-between"
								>
									<SizableText flex={1}>{question}</SizableText>
									<TouchableOpacity onPress={() => handleSelectQuestion(id)}>
										{savedQuestions.some((question) => question.id === id) ? (
											<MinusCircle color="$red11Light" size="$2.5" />
										) : (
											<PlusCircle color="$blue11Light" size="$2.5" />
										)}
									</TouchableOpacity>
								</XStack>
							</Pressable>
						)}
						ItemSeparatorComponent={() => <Separator borderWidth="$1" />}
						renderSectionHeader={({ section }) => (
							<Card
								borderRadius={0}
								elevate
								padding="$4"
								backgroundColor="$background"
							>
								<SizableText>{section.title}</SizableText>
							</Card>
						)}
					/>
				</View>
			</Screen>
		</GradientBackground>
	);
}
