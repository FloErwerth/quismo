import { Linking } from "react-native";

export const openInAppBrowser = async (url: string) => {
	const canOpen = await Linking.canOpenURL(url);
	if (!canOpen) {
		throw new Error("Cannot open URL");
	}
	await Linking.openURL(url);
};
