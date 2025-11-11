import { Cog, House } from "@tamagui/lucide-icons";
import { Tabs } from "expo-router";
import { useTheme, View } from "tamagui";
import { MainFunctionContextMenu } from "@/components/MainFunctionContextMenu/MainFunctionContextMenu";

export default function TabsLayout() {
	const theme = useTheme();
	return (
		<>
			<MainFunctionContextMenu />
			<Tabs
				screenOptions={{
					headerShown: false,
					tabBarAllowFontScaling: false,
					tabBarStyle: {
						height: 90,
						paddingTop: 10,
						borderTopWidth: 0,
						boxShadow: "0 2px 10px 0 rgba(0, 0, 0, 0.1)",
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
					name="context"
					options={{
						title: "",
						tabBarIcon: () => <View />,
						tabBarStyle: { width: 50 },
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
		</>
	);
}
