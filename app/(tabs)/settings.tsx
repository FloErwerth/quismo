import { useTranslation } from "react-i18next";
import { SizableText } from "tamagui";
import { ScrollableScreen } from "@/components/Screens/ScrollableScreen";
import { Button } from "@/components/tamagui/Button";
import { useStoreSelector } from "@/storage/storage";

export default function Settings() {
	const { t } = useTranslation();
	const resetOnboarding = useStoreSelector((state) => state.resetAccount);

	return (
		<ScrollableScreen>
			<SizableText>{t("tabs.settings")}</SizableText>
			<Button onPress={() => resetOnboarding(false)}>
				Account zurücksetzen (Abo wird nicht beendet)
			</Button>
		</ScrollableScreen>
	);
}
