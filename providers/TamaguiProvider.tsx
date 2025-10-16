import { createAnimations } from "@tamagui/animations-moti";
import { config as defaultConfig } from "@tamagui/config/v3";
import {
	createFont,
	createTamagui,
	TamaguiProvider as TamaguiProviderCore,
} from "@tamagui/core";
import type { PropsWithChildren } from "react";
import { Easing } from "react-native-reanimated";
import { PortalProvider } from "tamagui";

const font = createFont({
	family: "Normal",
	size: {
		1: 8,
		2: 10,
		3: 12,
		4: 14,
		true: 16,
		5: 16,
		6: 18,
		7: 20,
		8: 24,
		9: 28,
		10: 32,
		11: 38,
		12: 50,
	},
	lineHeight: {
		1: 10,
		2: 12,
		3: 14,
		4: 16,
		true: 20,
		5: 20,
		6: 24,
		7: 28,
		8: 32,
		9: 38,
		10: 42,
		11: 48,
		12: 64,
	},
	weight: {
		1: 100,
		2: 200,
		3: 300,
		4: 400,
		5: 500,
		6: 600,
		7: 700,
		8: 800,
		9: 900,
	},
	face: {
		100: {
			normal: "Thin",
		},
		200: {
			normal: "ExtraLight",
		},
		300: {
			normal: "Light",
		},
		400: {
			normal: "Regular",
		},
		500: {
			normal: "Medium",
		},
		600: {
			normal: "SemiBold",
		},
		700: {
			normal: "Bold",
		},
		800: {
			normal: "ExtraBold",
		},
		900: {
			normal: "Black",
		},
	},
});

const easeIn = Easing.in(Easing.ease);
const smoothBezier = Easing.bezier(0.215, 0.61, 0.355, 1.0);
const config = createTamagui({
	...defaultConfig,
	animation: createAnimations({
		bouncy: {
			type: "spring",
			damping: 9,
			mass: 0.9,
			stiffness: 150,
		},
		lazy: {
			type: "spring",
			damping: 18,
			stiffness: 50,
		},
		slow: {
			type: "spring",
			damping: 15,
			stiffness: 40,
		},
		quick: {
			type: "spring",
			damping: 20,
			mass: 1.2,
			stiffness: 250,
		},
		tooltip: {
			type: "timing",
			damping: 10,
			mass: 0.9,
			stiffness: 100,
		},
	}),
	fonts: {
		body: font,
		heading: font,
	},
	defaultProps: {
		Button: {
			variants: {
				primary: {
					backgroundColor: "$color.green6Light",
				},
			},
			defaultVariant: "primary",
		},
	},
});

type OurConfig = typeof config;

declare module "tamagui" {
	interface TamaguiCustomConfig extends OurConfig {
		unusedTokens: never[];
	}
}

export const TamaguiProvider = ({ children }: PropsWithChildren) => (
	<TamaguiProviderCore config={config}>
		<PortalProvider shouldAddRootHost>{children}</PortalProvider>
	</TamaguiProviderCore>
);
