import { Stack } from "expo-router";

export default function MotivatorsLayout() {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="index" />
			<Stack.Screen name="thought" />
		</Stack>
	);
}
