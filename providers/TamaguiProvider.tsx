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

const easeIn = Easing.in(Easing.ease);
const smoothBezier = Easing.bezier(0.215, 0.61, 0.355, 1.0);

const font = createFont({
	family: "Normal",
	size: {
		1: 8,
		2: 10,
		3: 12,
		true: 14,
		4: 14,
		5: 16,
		6: 18,
		7: 20,
		8: 24,
		9: 28,
		10: 32,
		11: 38,
		12: 50,
		13: 60,
		14: 70,
	},
	lineHeight: {
		1: 8 * 1.5,
		2: 10 * 1.5,
		3: 12 * 1.5,
		4: 14 * 1.5,
		true: 14 * 1.5,
		5: 16 * 1.5,
		6: 18 * 1.5,
		7: 20 * 1.5,
		8: 24 * 1.5,
		9: 28 * 1.5,
		10: 32 * 1.5,
		11: 38 * 1.5,
		12: 50 * 1.5,
		13: 60 * 1.5,
		14: 70 * 1.5,
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

const config = createTamagui({
	...defaultConfig,
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
		SizableText: {
			maxFontSizeMultiplier: 1,
		},
	},
	animations: createAnimations({
		"75ms": { type: "timing", duration: 75, easing: easeIn },
		"100ms": { type: "timing", duration: 100, easing: easeIn },
		"200ms": { type: "timing", duration: 200, easing: easeIn },
		bouncy: { type: "spring", damping: 60, stiffness: 1000 },
		superBouncy: { type: "spring", damping: 30, stiffness: 1000 },
		lazy: { type: "timing", duration: 1000, easing: easeIn },
		medium: { type: "timing", duration: 300, easing: easeIn },
		slow: { type: "timing", duration: 500, easing: easeIn },
		quick: { type: "timing", duration: 400, easing: smoothBezier },
		quicker: { type: "timing", duration: 300, easing: smoothBezier },
		quickest: { type: "timing", duration: 200, easing: smoothBezier },
		tooltip: { type: "timing", duration: 400, easing: easeIn },
	} as const),
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
