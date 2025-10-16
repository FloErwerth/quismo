import { useTranslation } from "react-i18next";
import { SizableText } from "tamagui";
import { ScrollableScreen } from "@/components/Screens/ScrollableScreen";

export default function Settings() {
	const { t } = useTranslation();
	return (
		<ScrollableScreen>
			<SizableText>{t("tabs.settings")}</SizableText>
		</ScrollableScreen>
	);
}
