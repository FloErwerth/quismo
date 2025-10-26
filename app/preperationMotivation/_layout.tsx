import { Stack } from "expo-router";

export default function PreperationMotivationLayout() {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="index" options={{ headerShown: false }} />
			<Stack.Screen name="templateQuestions" options={{ headerShown: false }} />
		</Stack>
	);
}
