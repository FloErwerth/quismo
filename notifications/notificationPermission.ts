import * as Notifications from "expo-notifications";

export const isNotificationPermissionGranted = async () => {
	try {
		const { status } = await Notifications.getPermissionsAsync();
		return status === Notifications.PermissionStatus.GRANTED;
	} catch (error) {
		console.error(error);
		return false;
	}
};
