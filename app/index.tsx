import { router } from "expo-router";
import { Trans, useTranslation } from "react-i18next";
import { SizableText, View } from "tamagui";
import { ScrollableScreen } from "@/components/Screens/ScrollableScreen";
import { Button } from "@/components/tamagui/Button";
import "@/translation/i18next";
import Animated from "react-native-reanimated";

export default function Index() {
	const { t } = useTranslation();

	return (
		<ScrollableScreen flex={1}>
			<Animated.Image
				style={{ width: "100%", height: 300, borderRadius: 32 }}
				source={require("@/assets/images/smoqui_wave.png")}
			/>
			<View flex={1} justifyContent="space-evenly">
				<SizableText size="$10" textAlign="center">
					{t("welcome.title")}
				</SizableText>
				<SizableText size="$7" textAlign="center">
					{t("welcome.subtitle1")}
				</SizableText>
				<SizableText size="$7" textAlign="center">
					{t("welcome.subtitle2")}
				</SizableText>
				<SizableText size="$7" textAlign="center">
					{t("welcome.subtitle3")} &#128515;
				</SizableText>
			</View>
			<View flex={1} justifyContent="flex-end">
				<Button.Floating
					onPress={() => router.push("/onboarding")}
					fontWeight="$8"
					fontSize="$8"
					size="$6"
				>
					{t("welcome.startButton")}
				</Button.Floating>
			</View>
			<SizableText size="$3" textAlign="center">
				<Trans
					i18nKey="welcome.disclaimer"
					components={{ strong: <SizableText size="$3" fontWeight="$8" /> }}
				/>
			</SizableText>
		</ScrollableScreen>
	);
}
