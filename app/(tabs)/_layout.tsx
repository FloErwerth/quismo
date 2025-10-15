import { Cog, House } from "@tamagui/lucide-icons";
import { Tabs } from "expo-router";
import { useTheme } from "tamagui";

export default function TabsLayout() {
	const theme = useTheme();

	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					height: 90,
					paddingTop: 16,
				},
				tabBarActiveTintColor: theme.blue11Light.val,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ color }) => <House size={28} color={color} />,
				}}
			/>
			<Tabs.Screen
				name="settings"
				options={{
					title: "Settings",
					tabBarIcon: ({ color }) => <Cog size={28} color={color} />,
				}}
			/>
		</Tabs>
	);
}
