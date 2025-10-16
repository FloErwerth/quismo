import { LinearGradient } from "expo-linear-gradient";
import type { PropsWithChildren } from "react";
import { useTheme } from "tamagui";

export const GradientBackground = ({ children }: PropsWithChildren) => {
	const theme = useTheme();
	return (
		<LinearGradient
			start={{ x: 0, y: 0 }}
			end={{ x: 1, y: 1 }}
			style={{ flex: 1 }}
			colors={[
				theme.green4Light.val,
				theme.blue5Light.val,
				theme.background.val,
			]}
		>
			{children}
		</LinearGradient>
	);
};
