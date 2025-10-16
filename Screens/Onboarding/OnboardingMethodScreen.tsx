import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { SizableText, View } from "tamagui";
import { ScrollableScreen } from "@/components/Screens/ScrollableScreen";
import { Accordion } from "@/components/tamagui/Accordion";
import { OnboardingPage } from "@/Screens/Onboarding/components/OnboardingPage";

export const OnboardingMethodScreen = () => {
	const { t } = useTranslation();
	return (
		<ScrollableScreen flex={1}>
			<OnboardingPage
				currentPage={0}
				title={t("onboarding.method.title")}
				onNext={() => router.push("/onboarding/personalData")}
			>
				<SizableText>{t("onboarding.method.intro1")}</SizableText>
				<Accordion>
					<Accordion.Item
						itemTitle={t("onboarding.method.phase1.title") as string}
					>
						<View gap="$2">
							<SizableText>{t("onboarding.method.phase1.p1")}</SizableText>
							<SizableText>{t("onboarding.method.phase1.p2")}</SizableText>
							<SizableText>
								<SizableText fontWeight="bold">
									{t("onboarding.method.phase1.durationLabel")}
								</SizableText>
								: {t("onboarding.method.phase1.durationValue")}
							</SizableText>
						</View>
					</Accordion.Item>
					<Accordion.Item
						itemTitle={t("onboarding.method.phase2.title") as string}
					>
						<View gap="$2">
							<SizableText>{t("onboarding.method.phase2.p1")}</SizableText>
							<SizableText>{t("onboarding.method.phase2.p2")}</SizableText>
							<SizableText>
								<SizableText fontWeight="bold">
									{t("onboarding.method.phase2.durationLabel")}
								</SizableText>
								: {t("onboarding.method.phase2.durationValue")}
							</SizableText>
						</View>
					</Accordion.Item>
					<Accordion.Item
						itemTitle={t("onboarding.method.phase3.title") as string}
					>
						<View gap="$2">
							<SizableText>{t("onboarding.method.phase3.p1")}</SizableText>
							<SizableText>{t("onboarding.method.phase3.p2")}</SizableText>
							<SizableText>
								<SizableText fontWeight="bold">
									{t("onboarding.method.phase3.durationLabel")}
								</SizableText>
								: {t("onboarding.method.phase3.durationValue")}
							</SizableText>
						</View>
					</Accordion.Item>
				</Accordion>
			</OnboardingPage>
		</ScrollableScreen>
	);
};
