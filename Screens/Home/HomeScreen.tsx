import { Bell } from "@tamagui/lucide-icons";
import { Image } from "expo-image";
import type { TFunction } from "i18next";
import { useTranslation } from "react-i18next";
import { Pressable } from "react-native";
import { SizableText, View, XStack } from "tamagui";
import { ScrollableScreen } from "@/components/Screens/ScrollableScreen";
import { Button } from "@/components/tamagui/Button";
import { useStore } from "@/storage/storage";

const getGreetingByTime = (t: TFunction) => {
	const hours = new Date().getHours();
	if (hours < 12) {
		return t("home.greeting.morning");
	} else if (hours < 18) {
		return t("home.greeting.afternoon");
	} else {
		return t("home.greeting.evening");
	}
};

export const HomeScreen = () => {
	const name = useStore((state) => state.name);
	const { t } = useTranslation();

	return (
		<ScrollableScreen>
			<XStack alignItems="center" justifyContent="space-between">
				<XStack alignItems="center" gap="$2">
					<Image
						source={require("@/assets/images/icon.png")}
						style={{ width: 60, height: 60 }}
					/>
					<View>
						<SizableText>{getGreetingByTime(t)}</SizableText>
						<SizableText size="$8" fontWeight="bold">
							{name}
						</SizableText>
					</View>
				</XStack>
				<Button
					onPress={() => console.log("open notifications")}
					variant="secondary"
					borderRadius="$12"
					width="$4"
					height="$4"
				>
					<Pressable>
						<Bell />
					</Pressable>
				</Button>
			</XStack>
		</ScrollableScreen>
	);
};
