import { Stack } from "expo-router";

export default function PreperationLayout() {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="knowledge" />
			<Stack.Screen name="motivators" />
		</Stack>
	);
}
