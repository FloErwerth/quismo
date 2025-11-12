const CHECK_IN_NOTIFICATION_CHANNEL_ID = "check-in-notification-channel";

import * as Notifications from "expo-notifications";
import {
	cancelScheduledNotificationAsync,
	scheduleNotificationAsync,
} from "expo-notifications";
import { useCallback, useEffect } from "react";
import { AppState, type AppStateStatus, Linking } from "react-native";
import { isNotificationPermissionGranted } from "@/notifications/notificationPermission";
import { useStoreSelector } from "@/storage/storage";

export const cancelCheckInNotification = async () => {
	await cancelScheduledNotificationAsync(CHECK_IN_NOTIFICATION_CHANNEL_ID);
};

export const scheduleCheckInNotification = async (date: Date | undefined) => {
	if (!date) {
		throw new Error("Check-In time is not set");
	}
	if (!(await isNotificationPermissionGranted())) {
		return;
	}
	const verifiedDate = new Date(date);
	await scheduleNotificationAsync({
		identifier: CHECK_IN_NOTIFICATION_CHANNEL_ID,
		content: {
			title: "Check-In",
			body: "It's time to check in!",
			data: {
				deepLink: "smoqui://checkIn",
			},
			autoDismiss: true,
		},
		trigger: {
			type: Notifications.SchedulableTriggerInputTypes.DAILY,
			hour: verifiedDate.getHours(),
			minute: verifiedDate.getMinutes(),
		},
	});
};

export const useHandleCheckInNotificationDeepLink = async () => {
	const handleDeepLink = useCallback(
		async (notification: Notifications.NotificationResponse) => {
			const possibleDeepLink =
				notification.notification.request.content.data?.deepLink;
			if (
				possibleDeepLink &&
				typeof possibleDeepLink === "string" &&
				notification.notification.request.identifier ===
					CHECK_IN_NOTIFICATION_CHANNEL_ID
			) {
				const canOpenURL = await Linking.canOpenURL(possibleDeepLink);
				if (canOpenURL) {
					await Linking.openURL(possibleDeepLink);
				}
			}
		},
		[],
	);

	useEffect(() => {
		console.log("useHandleCheckInNotificationDeepLink");
		const subscription = Notifications.addNotificationResponseReceivedListener(
			(notification) => {
				console.log("Notification received:", notification);
				handleDeepLink(notification);
			},
		);
		return () => subscription.remove();
	}, [handleDeepLink]);
};

export const useScheduleCheckInNotificationUponAppStart = () => {
	useHandleCheckInNotificationDeepLink();
	const checkInTime = useStoreSelector((state) => state.checkInTime);
	const onboardingCompleted = useStoreSelector(
		(state) => state.onboardingCompleted,
	);
	const notificationsEnabled = useStoreSelector(
		(state) => state.notificationsEnabled,
	);

	const cancelOrScheduleCheckInNotification = useCallback(
		(state: AppStateStatus) => {
			if (!checkInTime || !onboardingCompleted || !notificationsEnabled) {
				return;
			}
			if (state === "active") {
				cancelCheckInNotification().catch(console.error);
			} else {
				scheduleCheckInNotification(checkInTime).catch(console.error);
			}
		},
		[checkInTime, onboardingCompleted, notificationsEnabled],
	);

	useEffect(() => {
		const subscription = AppState.addEventListener(
			"change",
			cancelOrScheduleCheckInNotification,
		);
		return () => {
			subscription.remove();
		};
	}, [cancelOrScheduleCheckInNotification]);
};
