import { Trash } from "@tamagui/lucide-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TouchableOpacity } from "react-native";
import { SizableText, View, XStack } from "tamagui";
import { ScrollableScreen } from "@/components/Screens/ScrollableScreen";
import { Button } from "@/components/tamagui/Button";
import { Dialog } from "@/components/tamagui/Dialog";
import { Input } from "@/components/tamagui/Input";
import { getMotivationOptions, type Motivation } from "@/config/motivators";
import {
	useMotivationsStorage,
	useMotivationsStorageSelector,
} from "@/storage/motivationsStorage";

export default function ThoughtScreen() {
	const { motivatorId, thoughtId } = useLocalSearchParams<{
		motivatorId: Motivation;
		thoughtId: string;
	}>();

	const { t } = useTranslation();
	const addThought = useMotivationsStorage(
		(state) => state.addThoughtByMotivation,
	);
	const updateThought = useMotivationsStorage(
		(state) => state.updateThoughtByThoughtId,
	);
	const removeThought = useMotivationsStorage(
		(state) => state.removeThoughtByThoughtId,
	);
	const thoughts = useMotivationsStorageSelector((state) => state.thoughts);
	const savedThought = thoughts.find((thought) => thought.id === thoughtId);

	const motivation = getMotivationOptions(t)[motivatorId];

	const [thought, setThought] = useState(savedThought?.thought || "");
	const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

	const handleAddThought = () => {
		router.back();
		if (thoughtId) {
			updateThought(thoughtId, thought);
			return;
		}
		addThought(motivatorId, thought);
	};

	const handleDeleteThought = () => {
		setShowDeleteConfirmation(false);
		setTimeout(() => {
			removeThought(thoughtId);
			router.back();
		}, 200);
	};

	return (
		<>
			<ScrollableScreen
				back
				title="Deine Gedanken"
				action={
					savedThought !== undefined ? (
						<TouchableOpacity onPress={() => setShowDeleteConfirmation(true)}>
							<Trash size="$1" />
						</TouchableOpacity>
					) : undefined
				}
			>
				<SizableText size="$5">
					Halte nun deine Gedanken zum Thema {motivation.label} fest
				</SizableText>
				<Input
					multiline
					numberOfLines={10}
					verticalAlign="top"
					size="$5"
					placeholder="Ich möchte mit dem Rauchen aufhören, weil..."
					value={thought}
					onChangeText={setThought}
				/>
				<View flex={1} />
				<Button size="$5" disabled={!thought} onPress={handleAddThought}>
					Gedanken speichern
				</Button>
			</ScrollableScreen>
			<Dialog
				title="Gedanken löschen"
				open={showDeleteConfirmation}
				onAfterCloseAnimation={() => setShowDeleteConfirmation(false)}
				onOpenChange={setShowDeleteConfirmation}
			>
				<View gap="$4">
					<SizableText>
						Möchtest du diesen Gedanken wirklich löschen?
					</SizableText>
					<XStack gap="$2">
						<Button flex={1} onPress={handleDeleteThought}>
							Ja
						</Button>
						<Button flex={1} onPress={() => setShowDeleteConfirmation(false)}>
							Nein
						</Button>
					</XStack>
				</View>
			</Dialog>
		</>
	);
}
