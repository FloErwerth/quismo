import { Heart } from "@tamagui/lucide-icons";
import { router } from "expo-router";
import { FlatList } from "react-native";
import { SizableText, View, XStack } from "tamagui";
import { ScrollableScreen } from "@/components/Screens/ScrollableScreen";
import { Card } from "@/components/tamagui/Card";
import { Progress } from "@/components/tamagui/Progress";
import { type KnowledgeTypes, knowledgeConfig } from "@/config/knowledge";
import { useStore } from "@/storage/storage";

const KnowledgeCard = ({
	icon,
	title,
	description,
	numberOfFacts,
	factsShown,
	onPress,
}: {
	onPress: () => void;
	icon: React.ReactNode;
	title: string;
	description: string;
	numberOfFacts: number;
	factsShown: number;
}) => {
	return (
		<Card flex={1} gap="$3" onPress={onPress}>
			{icon}
			<View gap="$2">
				<SizableText size="$5">{title}</SizableText>
				<SizableText size="$3" color="$gray12Light">
					{description}
				</SizableText>
			</View>
			<View gap="$2">
				<XStack justifyContent="space-between">
					<SizableText size="$2" color="$gray12Light">
						Fortschritt
					</SizableText>
					<SizableText size="$2">
						{factsShown}/{numberOfFacts}
					</SizableText>
				</XStack>
				<Progress size="$2" value={(factsShown / numberOfFacts) * 100} />
			</View>
		</Card>
	);
};

export default function KnowledgeScreen() {
	const knowledgeCategoryTuples: [
		KnowledgeTypes,
		(typeof knowledgeConfig)[KnowledgeTypes],
	][] = Object.entries(knowledgeConfig).map(
		([knowledgeType, knowledgeCategory]) => [
			knowledgeType as KnowledgeTypes,
			knowledgeCategory,
		],
	);

	const acquiredKnowledge = useStore((state) => state.acquiredKnowledge);

	const getFactsShown = (
		knowledgeCategory: (typeof knowledgeConfig)[KnowledgeTypes],
	) => {
		return knowledgeCategory.knowledge.filter((knowledge) =>
			acquiredKnowledge.includes(knowledge.id),
		).length;
	};

	return (
		<ScrollableScreen back title="Wissenssammlung">
			<View gap="$4">
				<XStack gap="$4">
					<FlatList
						scrollEnabled={false}
						contentContainerStyle={{ gap: 16 }}
						numColumns={2}
						columnWrapperStyle={{ gap: 16 }}
						data={knowledgeCategoryTuples}
						renderItem={({ item }) => (
							<KnowledgeCard
								key={item[0]}
								onPress={() =>
									router.push(`./knowledge/categories?knowledgeType=${item[0]}`)
								}
								numberOfFacts={item[1].knowledge.length}
								factsShown={getFactsShown(item[1])}
								icon={<Heart size={24} color="black" />}
								title={item[1].title}
								description={item[1].summary}
							/>
						)}
					/>
				</XStack>
			</View>
		</ScrollableScreen>
	);
}
