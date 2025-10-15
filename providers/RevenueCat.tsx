import * as SplashScreen from "expo-splash-screen";
import {
	createContext,
	type PropsWithChildren,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";
import { Platform } from "react-native";
import Purchases, { LOG_LEVEL } from "react-native-purchases";

const RevenueCatContext = createContext({ isSubscribed: false });

const useSubscriptionContext = () => {
	const context = useContext(RevenueCatContext);
	if (!context) {
		throw new Error(
			"useSubscriptionContext must be used within a RevenueCatProvider",
		);
	}
	return context;
};

export const useIsSubscribed = () => {
	const { isSubscribed } = useSubscriptionContext();
	return isSubscribed;
};

const RevenueCatSubscriptionProvider = ({
	children,
	isInitialized,
}: PropsWithChildren<{ isInitialized: boolean }>) => {
	const [isSubscribed, setIsSubscribed] = useState(false);

	const getIsSubscribedInRevenueCat = useCallback(async () => {
		const customerInfo = await Purchases.getCustomerInfo();
		return Object.values(customerInfo.entitlements.active).length > 0;
	}, []);

	useEffect(() => {
		if (!isInitialized) {
			return;
		}

		let timeout: ReturnType<typeof setTimeout>;
		getIsSubscribedInRevenueCat()
			.then((isSubscribed: boolean) => {
				setIsSubscribed(isSubscribed);
			})
			.catch(() => {
				setIsSubscribed(false);
			})
			.finally(async () => {
				timeout = setTimeout(async () => {
					await SplashScreen.hideAsync();
				}, 200);
			});

		return () => {
			clearTimeout(timeout);
		};
	}, [getIsSubscribedInRevenueCat, isInitialized]);

	return (
		<RevenueCatContext.Provider value={{ isSubscribed }}>
			{children}
		</RevenueCatContext.Provider>
	);
};

export const RevenueCatProvider = ({ children }: PropsWithChildren) => {
	const [isInitialized, setIsInitialized] = useState(false);
	useEffect(() => {
		Purchases.setLogLevel(LOG_LEVEL.ERROR);

		if (Platform.OS === "ios") {
			const iosApiKey = process.env.EXPO_PUBLIC_IOS_REVENUECAT;
			if (!iosApiKey) {
				throw new Error("IOS RevenueCat API key is not set");
			}
			Purchases.configure({ apiKey: iosApiKey });
		}
		if (Platform.OS === "android") {
			const androidApiKey = process.env.EXPO_PUBLIC_ANDROID_REVENUECAT;
			if (!androidApiKey) {
				throw new Error("Android RevenueCat API key is not set");
			}
			Purchases.configure({ apiKey: androidApiKey });
		}
		setIsInitialized(true);
	}, []);

	return (
		<RevenueCatSubscriptionProvider isInitialized={isInitialized}>
			{children}
		</RevenueCatSubscriptionProvider>
	);
};
