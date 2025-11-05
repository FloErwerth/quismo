import { CheckSquare2, ChevronRight, Square } from "@tamagui/lucide-icons";
import { Redirect, router, useLocalSearchParams } from "expo-router";
import { TouchableOpacity } from "react-native";
import { SizableText, View } from "tamagui";
import { ScrollableScreen } from "@/components/Screens/ScrollableScreen";
import { Card } from "@/components/tamagui/Card";
import {
	type KnowledgeId,
	type KnowledgeTypes,
	knowledgeConfig,
} from "@/config/knowledge";
import { useStore } from "@/storage/storage";

type KnowledgeCardProps = {
	title: string;
	done: boolean;
	onPress: () => void;
};
const KnowledgeCard = ({ title, done, onPress }: KnowledgeCardProps) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<Card paddingRight="$3" gap="$3" flexDirection="row" alignItems="center">
				{done ? (
					<CheckSquare2 size="$2" color="$green10Light" />
				) : (
					<Square size="$2" />
				)}
				<View flex={1}>
					<SizableText>{title}</SizableText>
				</View>

				<ChevronRight />
			</Card>
		</TouchableOpacity>
	);
};

export default function KnowledgeCategories() {
	const { knowledgeType } = useLocalSearchParams<{
		knowledgeType: KnowledgeTypes;
	}>();
	const acquiredKnowledge = useStore((state) => state.acquiredKnowledge);
	const addAcquiredKnowledge = useStore((state) => state.addAcquiredKnowledge);
	if (!knowledgeType) {
		return <Redirect href=".." />;
	}

	const knowledgeCategory = knowledgeConfig[knowledgeType];
	const { knowledge } = knowledgeCategory;

	const getDone = (knowledgeId: KnowledgeId) => {
		return acquiredKnowledge.includes(knowledgeId);
	};

	return (
		<ScrollableScreen back title={knowledgeCategory.title}>
			<SizableText>
				Hier sind einige Informationen zum Thema {knowledgeCategory.title}
			</SizableText>
			<View gap="$3">
				{knowledge.map((knowledge) => (
					<KnowledgeCard
						onPress={() => {
							router.push(
								`./detail?knowledgeId=${knowledge.id}&knowledgeType=${knowledgeType}`,
							);
							addAcquiredKnowledge(knowledge.id);
						}}
						key={knowledge.id}
						done={getDone(knowledge.id)}
						title={knowledge.title}
					/>
				))}
			</View>
		</ScrollableScreen>
	);
}
