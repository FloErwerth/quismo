import { Stack } from "expo-router";

export default function OnboardingLayout() {
	return (
		<Stack
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="index" />
			<Stack.Screen name="personalData" />
			<Stack.Screen name="numberOfCigarettesPerDayPage" />
			<Stack.Screen name="numberOfCigarettesPerBoxPage" />
			<Stack.Screen name="pricePerBoxPage" />
			<Stack.Screen name="startJourney" />
			<Stack.Screen name="paywall" />
		</Stack>
	);
}
