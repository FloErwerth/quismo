import { useTranslation } from "react-i18next";
import { SizableText } from "tamagui";
import { ScrollableScreen } from "@/components/Screens/ScrollableScreen";
import { Button } from "@/components/tamagui/Button";
import { useStore } from "@/storage/storage";

export default function Settings() {
	const { t } = useTranslation();
	const isTestUser = useStore((store) => store.isTestUser);
	const updateIsTestUser = useStore((store) => store.updateIsTestUser);
	return (
		<ScrollableScreen>
			<SizableText>{t("tabs.settings")}</SizableText>
			{isTestUser && (
				<Button onPress={() => updateIsTestUser(false)}>Reset Test User</Button>
			)}
			<Button>Account zurücksetzen (Abo wird nicht beendet)</Button>
		</ScrollableScreen>
	);
}
