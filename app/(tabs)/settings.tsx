import { useTranslation } from "react-i18next";
import { SizableText } from "tamagui";
import { ScrollableScreen } from "@/components/Screens/ScrollableScreen";
import { Button } from "@/components/tamagui/Button";
import { useStoreSelector } from "@/storage/storage";

export default function Settings() {
	const { t } = useTranslation();
	const state = useStoreSelector((state) => state.checkIns);
	const resetOnboarding = useStoreSelector((state) => state.resetAccount);
	const updateHasSeenWelcomeDialog = useStoreSelector(
		(state) => state.updateHasSeenCheckInIntroduction,
	);
	return (
		<ScrollableScreen>
			<SizableText>{t("tabs.settings")}</SizableText>
			<Button onPress={() => resetOnboarding(false)}>
				Account zurücksetzen (Abo wird nicht beendet)
			</Button>
			<Button
				onPress={() => {
					updateHasSeenWelcomeDialog(false);
				}}
				size="$8"
			>
				reset welcome dialog
			</Button>
			<Button onPress={() => console.log(state)}>Log Store</Button>
		</ScrollableScreen>
	);
}
