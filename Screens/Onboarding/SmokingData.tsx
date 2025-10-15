import { Cigarette } from "@tamagui/lucide-icons";
import { router } from "expo-router";
import { Input, SizableText, View, XStack } from "tamagui";
import { ScrollableScreen } from "@/components/Screens/ScrollableScreen";
import { Button } from "@/components/tamagui/Button";

export const SmokingData = () => {
	return (
		<ScrollableScreen flex={1}>
			<XStack alignItems="center" gap="$2">
				<View
					padding="$3"
					borderRadius="$4"
					backgroundColor="$color.green5Light"
				>
					<Cigarette />
				</View>
				<View>
					<SizableText size="$6">Rauchgewohnheiten</SizableText>
				</View>
			</XStack>
			<View gap="$2">
				<SizableText>Wie viele Zigaretten rauchst Du pro Tag?</SizableText>
				<Input />
			</View>
			<View gap="$2">
				<SizableText>Wie viele Zigaretten sind in einer Schachtel?</SizableText>
				<Input />
			</View>
			<View gap="$2">
				<SizableText>Wie viel Kostet eine Schachtel?</SizableText>
				<Input />
			</View>
			<View gap="$2">
				<SizableText>Wann möchtest Du mit dem Rauchen aufhören?</SizableText>
				<Button variant="outlined">
					<SizableText>Datum auswählen</SizableText>
				</Button>
			</View>
			<View flex={1} />
			<View gap="$2">
				<Button size="$5" onPress={() => router.push("/onboarding/method")}>
					Weiter
				</Button>
				<Button
					variant="outlined"
					size="$5"
					onPress={() => router.push("/onboarding")}
				>
					Zurück
				</Button>
			</View>
		</ScrollableScreen>
	);
};
