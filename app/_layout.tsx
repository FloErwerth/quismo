import { Lexend_100Thin } from "@expo-google-fonts/lexend/100Thin";
import { Lexend_200ExtraLight } from "@expo-google-fonts/lexend/200ExtraLight";
import { Lexend_300Light } from "@expo-google-fonts/lexend/300Light";
import { Lexend_400Regular } from "@expo-google-fonts/lexend/400Regular";
import { Lexend_500Medium } from "@expo-google-fonts/lexend/500Medium";
import { Lexend_600SemiBold } from "@expo-google-fonts/lexend/600SemiBold";
import { Lexend_700Bold } from "@expo-google-fonts/lexend/700Bold";
import { Lexend_800ExtraBold } from "@expo-google-fonts/lexend/800ExtraBold";
import { Lexend_900Black } from "@expo-google-fonts/lexend/900Black";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "react-native";
import { GradientBackground } from "@/components/Screens/GradientBackground";
import { Providers } from "@/providers";
import { useIsSubscribed } from "@/providers/RevenueCat";

SplashScreen.setOptions({
	duration: 1000,
	fade: true,
});

SplashScreen.preventAutoHideAsync();

const AppStack = () => {
	const isSubscribed = useIsSubscribed();
	return (
		<Stack
			initialRouteName={isSubscribed ? "(tabs)" : "index"}
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Protected guard={!isSubscribed}>
				<Stack.Screen name="index" />
				<Stack.Screen name="onboarding" />
			</Stack.Protected>
			<Stack.Protected guard={isSubscribed}>
				<Stack.Screen name="(tabs)" />
				<Stack.Screen name="preperationMotivation" />
				<Stack.Screen
					options={{ presentation: "pageSheet" }}
					name="preperationHelp"
				/>
				<Stack.Screen name="preperationAnalysis" />
				<Stack.Screen name="preperationSupport" />
				<Stack.Screen name="preperationAlternatives" />
			</Stack.Protected>
		</Stack>
	);
};

export default function RootLayout() {
	const [loaded] = useFonts({
		Thin: Lexend_100Thin,
		ExtraLight: Lexend_200ExtraLight,
		Light: Lexend_300Light,
		Regular: Lexend_400Regular,
		Medium: Lexend_500Medium,
		SemiBold: Lexend_600SemiBold,
		Bold: Lexend_700Bold,
		ExtraBold: Lexend_800ExtraBold,
		Black: Lexend_900Black,
	});

	if (!loaded) {
		// maybe display error screen
		return null;
	}

	return (
		<Providers>
			<GradientBackground>
				<StatusBar hidden />
				<AppStack />
			</GradientBackground>
		</Providers>
	);
}
