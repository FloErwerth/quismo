import { Euro, Leaf, ShieldCheck, ShieldPlus } from "@tamagui/lucide-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import { SizableText, View, XStack } from "tamagui";
import { ScrollableScreen } from "@/components/Screens/ScrollableScreen";
import { Button } from "@/components/tamagui/Button";

export default function Index() {
	return (
		<ScrollableScreen flex={1}>
			<Image
				style={{ width: "100%", height: 200, borderRadius: 32 }}
				source={require("@/assets/images/adaptive-icon.png")}
			/>
			<SizableText textAlign="center" paddingTop="$3" size="$7">
				QuiSmo: Schritt für Schritt in ein rauchfreies Leben
			</SizableText>
			<SizableText textAlign="center">
				Folgendes kannst Du von QuiSmo erwarten:
			</SizableText>
			<View flex={1} gap="$4" justifyContent="center">
				<XStack alignItems="center" gap="$4">
					<View
						padding="$3"
						borderRadius="$4"
						backgroundColor="$color.green5Light"
					>
						<Leaf />
					</View>
					<SizableText size="$6">Stressfreieres aufhören</SizableText>
				</XStack>
				<XStack alignItems="center" gap="$4">
					<View
						padding="$3"
						borderRadius="$4"
						backgroundColor="$color.green5Light"
					>
						<ShieldCheck />
					</View>
					<SizableText size="$6">Kontrolle behalten</SizableText>
				</XStack>
				<XStack alignItems="center" gap="$4">
					<View
						padding="$3"
						borderRadius="$4"
						backgroundColor="$color.green5Light"
					>
						<ShieldPlus />
					</View>
					<SizableText size="$6">Gesundheit verbessern</SizableText>
				</XStack>
				<XStack alignItems="center" gap="$4">
					<View
						padding="$3"
						borderRadius="$4"
						backgroundColor="$color.green5Light"
					>
						<Euro />
					</View>
					<SizableText size="$6">Bares Geld sparen</SizableText>
				</XStack>
			</View>
			<View flex={1} justifyContent="flex-end">
				<Button
					onPress={() => router.push("/onboarding")}
					paddingHorizontal="$2"
					size="$5"
				>
					Beginne deinen Weg
				</Button>
			</View>
		</ScrollableScreen>
	);
}
