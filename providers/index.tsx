import type { PropsWithChildren } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RevenueCatProvider } from "@/providers/RevenueCat";
import { TamaguiProvider } from "./TamaguiProvider";
import "react-native-random-uuid";

export const Providers = ({ children }: PropsWithChildren) => {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<RevenueCatProvider>
				<SafeAreaProvider>
					<KeyboardProvider>
						<TamaguiProvider>{children}</TamaguiProvider>
					</KeyboardProvider>
				</SafeAreaProvider>
			</RevenueCatProvider>
		</GestureHandlerRootView>
	);
};
