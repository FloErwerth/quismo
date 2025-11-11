import {
	Nunito_400Regular,
	Nunito_500Medium,
	Nunito_600SemiBold,
	Nunito_700Bold,
	Nunito_800ExtraBold,
	Nunito_900Black,
} from "@expo-google-fonts/nunito";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "react-native";
import { GradientBackground } from "@/components/Backgrounds/GradientBackground";
import { Providers } from "@/providers";
import { useStoreSelector } from "@/storage/storage";

SplashScreen.setOptions({
	duration: 1000,
	fade: true,
});

SplashScreen.preventAutoHideAsync();

const AppStack = () => {
	const onboardingCompleted = useStoreSelector(
		(state) => state.onboardingCompleted,
	);

	return (
		<Stack
			initialRouteName={onboardingCompleted ? "(tabs)" : "index"}
			screenOptions={{
				headerShown: false,
				gestureEnabled: false,
			}}
		>
			<Stack.Protected guard={!onboardingCompleted}>
				<Stack.Screen name="index" />
				<Stack.Screen name="onboarding" />
			</Stack.Protected>
			<Stack.Protected guard={onboardingCompleted}>
				<Stack.Screen name="checkIn" />
				<Stack.Screen name="(tabs)" />
			</Stack.Protected>
		</Stack>
	);
};

export default function RootLayout() {
	const [loaded] = useFonts({
		Regular: Nunito_400Regular,
		Medium: Nunito_500Medium,
		SemiBold: Nunito_600SemiBold,
		Bold: Nunito_700Bold,
		ExtraBold: Nunito_800ExtraBold,
		Black: Nunito_900Black,
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
