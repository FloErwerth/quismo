import { Book, ExternalLink } from "@tamagui/lucide-icons";
import { Redirect, useLocalSearchParams } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Card, SizableText, XStack } from "tamagui";
import { ScrollableScreen } from "@/components/Screens/ScrollableScreen";
import {
	type KnowledgeId,
	type KnowledgeTypes,
	knowledgeConfig,
} from "@/config/knowledge";
import { openInAppBrowser } from "@/utils/inAppBrowser";

export default function KnowledgeDetail() {
	const { knowledgeId, knowledgeType } = useLocalSearchParams<{
		knowledgeId: KnowledgeId;
		knowledgeType: KnowledgeTypes;
	}>();
	const knowledge = knowledgeConfig[knowledgeType].knowledge.find(
		(knowledge) => knowledge.id === knowledgeId,
	);

	if (!knowledge) {
		return <Redirect href=".." />;
	}

	return (
		<ScrollableScreen back title={knowledge.title} gap="$6">
			<Card padded gap="$3" elevate>
				<XStack alignItems="center" gap="$2">
					<Book size="$1" color="$gray8Light" />
					<SizableText size="$4" color="$gray8Light">
						Zusammenfassung
					</SizableText>
				</XStack>
				<SizableText flex={1}>{knowledge.summary}</SizableText>
			</Card>
			{knowledge.details.map((detail) => (
				<SizableText key={detail}>{detail}</SizableText>
			))}
			<Card padded gap="$3" bordered>
				<SizableText size="$4" color="$gray8Light">
					{knowledge.sources.length > 1 ? "Quellen" : "Quelle"}
				</SizableText>
				{knowledge.sources.map((source) => (
					<TouchableOpacity
						onPress={async () => await openInAppBrowser(source.url)}
						key={source.name}
					>
						<XStack alignItems="center" gap="$2" paddingRight="$6">
							<ExternalLink size="$1" color="$blue10Light" />
							<SizableText
								numberOfLines={1}
								ellipsizeMode="tail"
								color="$blue10Light"
								size="$4"
							>
								{source.name}
							</SizableText>
						</XStack>
					</TouchableOpacity>
				))}
			</Card>
		</ScrollableScreen>
	);
}
