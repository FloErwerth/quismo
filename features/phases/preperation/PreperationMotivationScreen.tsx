import { List, Plus } from "@tamagui/lucide-icons";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { Button, Card, Input, Separator, SizableText, XStack } from "tamagui";
import { Screen } from "@/components/Screens/Screen";
import { getQuestionById } from "@/config/preperation";
import { usePreperationStore } from "@/storage/phaseStorage";

export const PreperationMotivationScreen = () => {
	const { t } = useTranslation();

	const motivationAnswers = usePreperationStore(
		(state) => state.motivationAnswers,
	);

	console.log(getQuestionById("motivation", "finance1", t));

	return (
		<Screen back title="Motivation">
			<SizableText>
				Was motiviert Dich mit dem Rauchen aufzuhören? Nimm Dir Zeit einen
				Moment Zeit um über die Gründe nachzudenken und diese festzuhalten
			</SizableText>
			<SizableText>
				Erstelle dafür eigene Fragen oder suche Dir welche aus unseren Vorgaben
				aus
			</SizableText>
			<XStack justifyContent="space-evenly">
				<Button borderRadius="$12" size="$4" backgroundColor="$green2Light">
					<Plus size="$1" />
					Frage erstellen
				</Button>
				<Button
					onPress={() =>
						router.push(
							"/preperationMotivation/templateQuestions?type=motivation",
						)
					}
					borderRadius="$12"
					size="$4"
					backgroundColor="$blue2Light"
				>
					<List size="$1" />
					Vorlage wählen
				</Button>
			</XStack>
			<Separator />
			<SizableText>Deine Fragen und Antworten</SizableText>
			<KeyboardAwareScrollView>
				{motivationAnswers.map(({ id, question, answer }) => (
					<Card key={id} padded elevate>
						<SizableText color="$gray10Light">
							{question === undefined
								? getQuestionById("motivation", id, t)
								: question}
						</SizableText>
						<Input placeholder={answer || "Deine Antwort"} />
					</Card>
				))}
			</KeyboardAwareScrollView>
		</Screen>
	);
};
