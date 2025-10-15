import { useMMKVNumber, useMMKVString } from "react-native-mmkv";

export const STORAGE_KEYS = {
	NAME: "name",
	CIGARETTES_PER_BOX: "cigarettesPerBox",
	AVERAGE_CIGARETTES_SMOKED_PER_DAY: "averageCigarettesSmokedPerDay",
	BOX_PRICE: "boxPrice",
	CURRENCY: "currency",
} as const;

type StorageKeys = (typeof STORAGE_KEYS)[keyof typeof STORAGE_KEYS];

export const useStoreString = (key: StorageKeys) => {
	return useMMKVString(key);
};

export const useStoreNumber = (key: StorageKeys) => {
	const [value, setValue] = useMMKVNumber(key);

	return [
		value,
		(value: string | number | undefined) => {
			if (value === undefined) {
				setValue(undefined);
				return;
			}
			if (typeof value === "string") {
				setValue(Number(value));
				return;
			}
			setValue(value);
		},
	] as const;
};
