import { Compass } from "@tamagui/lucide-icons";
import { PHASES } from "@/types";

export const phaseConfig = {
	[PHASES.PREPERATION]: {
		Icon: Compass,
	},
} as const;
