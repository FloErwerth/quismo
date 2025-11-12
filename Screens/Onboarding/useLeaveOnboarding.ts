import { useScheduleCheckInNotification as useMaybeScheduleCheckInNotifications } from "@/notifications/checkInNotifications";
import { useStoreSelector } from "@/storage/storage";

export const useLeaveOnboarding = () => {
	const completeOnboarding = useStoreSelector(
		(state) => state.completeOnboarding,
	);
	const maybeScheduleCheckInNotification =
		useMaybeScheduleCheckInNotifications();

	return () => {
		completeOnboarding();
		maybeScheduleCheckInNotification();
	};
};
