import { useTranslation } from "react-i18next";
import { SizableText } from "tamagui";
import { ScrollableScreen } from "@/components/Screens/ScrollableScreen";

export default function Index() {
	const { t } = useTranslation();

	return (
		<ScrollableScreen>
			<SizableText>{t("tabs.home")}</SizableText>
		</ScrollableScreen>
	);
}
