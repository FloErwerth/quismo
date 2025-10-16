import { Euro, Leaf, ShieldCheck, ShieldPlus } from "@tamagui/lucide-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import { Trans, useTranslation } from "react-i18next";
import { SizableText, useTheme, View, XStack } from "tamagui";
import { ScrollableScreen } from "@/components/Screens/ScrollableScreen";
import { Button } from "@/components/tamagui/Button";
import "@/translation/i18next";

export default function Index() {
	const { t } = useTranslation();
	const theme = useTheme();
	console.log(theme.blue11Light.val);
	return (
		<ScrollableScreen flex={1}>
			<View paddingTop="$6">
				<Image
					style={{ width: "100%", height: 160, borderRadius: 32 }}
					source={require("@/assets/images/adaptive-icon.png")}
				/>
				<SizableText textAlign="center" size="$10">
					QuiSmo
				</SizableText>
			</View>
			<SizableText textAlign="center" size="$8">
				{t("landing.headline")}
			</SizableText>
			<View gap="$3" flex={1} justifyContent="center">
				<SizableText>{t("landing.expect")}</SizableText>
				<View gap="$3" justifyContent="center">
					<XStack alignItems="center" gap="$4">
						<View
							padding="$3"
							borderRadius="$4"
							backgroundColor="$color.green5Light"
						>
							<Leaf />
						</View>
						<SizableText size="$6">
							{t("landing.benefitLessStress")}
						</SizableText>
					</XStack>
					<XStack alignItems="center" gap="$4">
						<View
							padding="$3"
							borderRadius="$4"
							backgroundColor="$color.green5Light"
						>
							<ShieldCheck />
						</View>
						<SizableText size="$6">{t("landing.benefitControl")}</SizableText>
					</XStack>
					<XStack alignItems="center" gap="$4">
						<View
							padding="$3"
							borderRadius="$4"
							backgroundColor="$color.green5Light"
						>
							<ShieldPlus />
						</View>
						<SizableText size="$6">{t("landing.benefitHealth")}</SizableText>
					</XStack>
					<XStack alignItems="center" gap="$4">
						<View
							padding="$3"
							borderRadius="$4"
							backgroundColor="$color.green5Light"
						>
							<Euro />
						</View>
						<SizableText size="$6">{t("landing.benefitMoney")}</SizableText>
					</XStack>
				</View>
			</View>
			<View flex={1} justifyContent="flex-end">
				<Button
					onPress={() => router.push("/onboarding")}
					paddingHorizontal="$2"
					size="$5"
				>
					{t("common.next")}
				</Button>
			</View>
			<SizableText size="$3" textAlign="center">
				<Trans
					i18nKey="landing.disclaimer"
					components={{ strong: <SizableText size="$3" fontWeight="$5" /> }}
				/>
			</SizableText>
		</ScrollableScreen>
	);
}
