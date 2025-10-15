import AsyncStorageImpl from "@react-native-async-storage/async-storage";
import { withStaticProperties } from "tamagui";

const AsyncStorageDefintion = () => ({
	getItem: async (key: string) => {
		return AsyncStorageImpl.getItem(key);
	},
	setItem: async (key: string, value: string) => {
		return AsyncStorageImpl.setItem(key, value);
	},
	removeItem: async (key: string) => {
		return AsyncStorageImpl.removeItem(key);
	},
});

export const AsyncStorage = withStaticProperties(AsyncStorageDefintion, {
	Keys: {},
});
