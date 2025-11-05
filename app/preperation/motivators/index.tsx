import { ChevronRight, Info, Plus } from "@tamagui/lucide-icons";
import { Redirect, router, useLocalSearchParams } from "expo-router";
import { useTranslation } from "react-i18next";
import { Pressable, TouchableOpacity } from "react-native";
import { SizableText, View, XStack } from "tamagui";
import { ScrollableScreen } from "@/components/Screens/ScrollableScreen";
import { Card } from "@/components/tamagui/Card";
import {
	getMotivationOptions,
	type Motivation,
	motivatorsPageTexts,
} from "@/config/motivators";
import { useMotivationsStorageSelector } from "@/storage/motivationsStorage";

export default function MotivatorsScreen() {
	const { motivatorId } = useLocalSearchParams<{ motivatorId: Motivation }>();
	const thoughtsFromStore = useMotivationsStorageSelector(
		(state) => state.thoughts,
	);
	const thoughts = thoughtsFromStore.filter((thought) =>
		thought.id.includes(motivatorId),
	);

	const { t } = useTranslation();
	if (!motivatorId) {
		return <Redirect href=".." />;
	}

	const motivation = getMotivationOptions(t)[motivatorId];
	const text = motivatorsPageTexts[motivatorId];

	const navigateToThought = (thoughtId: string) => {
		router.push(
			`./motivators/thought?motivatorId=${motivatorId}&thoughtId=${thoughtId}`,
		);
	};

	const navigateToNewThought = () => {
		router.push(`./motivators/thought?motivatorId=${motivatorId}`);
	};

	return (
		<ScrollableScreen back title={motivation.label}>
			<SizableText size="$5">{text.description}</SizableText>
			<Card gap="$2">
				<XStack gap="$2">
					<Info size="$1" color="$gray10Light" />
					<SizableText size="$5" color="$gray10Light">
						Denkanstoß
					</SizableText>
				</XStack>
				<SizableText size="$5" color="$gray10Light">
					{text.help}
				</SizableText>
			</Card>
			<View gap="$3">
				{thoughts.length > 0 && (
					<XStack justifyContent="space-between" alignItems="center">
						<SizableText size="$6">Deine festgehaltenen Gedanken:</SizableText>
						<Pressable onPress={navigateToNewThought}>
							<View
								padding="$1"
								backgroundColor="$blue6Light"
								borderRadius="$2"
							>
								<Plus size="$1" />
							</View>
						</Pressable>
					</XStack>
				)}
				<View gap="$2">
					{thoughts &&
						thoughts.length > 0 &&
						thoughts?.map((thought) => (
							<Card
								elevate
								key={thought.id}
								gap="$2"
								onPress={() => navigateToThought(thought.id)}
							>
								<XStack gap="$2" alignItems="center">
									<View flex={1} gap="$2">
										<SizableText flex={1} ellipsizeMode="tail" size="$5">
											{thought.thought}
										</SizableText>
										<SizableText size="$3" alignSelf="flex-end">
											{new Date(thought.createdAt).toLocaleDateString("de-DE", {
												day: "2-digit",
												month: "2-digit",
												year: "numeric",
												hour: "2-digit",
												minute: "2-digit",
												hour12: false,
												timeZone: "Europe/Berlin",
											})}{" "}
											Uhr
										</SizableText>
									</View>
									<ChevronRight size="$1" />
								</XStack>
							</Card>
						))}
				</View>
			</View>
			<TouchableOpacity onPress={navigateToNewThought}>
				<XStack
					alignItems="center"
					justifyContent="center"
					gap="$2"
					padding="$2"
				>
					<Plus size="$1" />
					<SizableText size="$5">Gedanken festhalten</SizableText>
				</XStack>
			</TouchableOpacity>
		</ScrollableScreen>
	);
}
