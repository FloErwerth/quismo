export const PHASES = {
	PREPERATION: "PREPERATION",
	SMOKE_STOP: "SMOKE_STOP",
	STABILIZATION: "STABILIZATION",
} as const;

export type Phase = (typeof PHASES)[keyof typeof PHASES];

export type PreperationType =
	| "motivation"
	| "analysis"
	| "support"
	| "alternative";
