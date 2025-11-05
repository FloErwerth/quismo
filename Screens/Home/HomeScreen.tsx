import { Image } from "expo-image";
import type { TFunction } from "i18next";
import { useTranslation } from "react-i18next";
import { Button, SizableText, View, XStack } from "tamagui";
import { ScrollableScreen } from "@/components/Screens/ScrollableScreen";
import { useStore } from "@/storage/storage";
import { MotviatorsCard } from "./MotviatorsCard";

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
			<MotviatorsCard />
			<Button onPress={() => useStore.getState().resetStore()}>
				Reset store
			</Button>
		</ScrollableScreen>
	);
};
