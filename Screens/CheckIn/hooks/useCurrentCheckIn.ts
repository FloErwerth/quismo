import type { CheckIn } from "@/config/checkin";
import { useStoreSelector } from "@/storage/storage";

export const useCheckIns = () => {
	return useStoreSelector((state) => state.checkIns);
};

export const useCurrentCheckIn = () => {
	const checkIns = useCheckIns();
	const today = new Date();
	today.setHours(0, 0, 0, 0);
	const timestampToday = today.getTime();

	if (!(timestampToday in checkIns)) {
		return {
			timestamp: timestampToday,
			checkIn: {} as CheckIn,
		};
	}

	return {
		timestamp: timestampToday,
		checkIn: checkIns[timestampToday],
	};
};

export const usePreviousCheckIn = (timestamp: number) => {
	const checkIns = useCheckIns();
	const previousCheckInTimestamp = Object.keys(checkIns).find(
		(key) => Number(key) < timestamp,
	);
	return checkIns[previousCheckInTimestamp as unknown as number];
};
