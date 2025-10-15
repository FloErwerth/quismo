import type { Currency } from "@/config/currencies";

export const ONBOARDING_TARGET = {
	QUIT: "quit",
	LIMIT: "limit",
} as const;

export type OnboardingTarget =
	(typeof ONBOARDING_TARGET)[keyof typeof ONBOARDING_TARGET];

export const ONBOARDING_TARGET_DATES = {
	FOURTEEN_DAYS: "fourteenDays",
	THIRTY_DAYS: "thirtyDays",
	THREE_MONTHS: "threeMonths",
	SIX_MONTHS: "sixMonths",
} as const;

export type OnbaordingTargetDate =
	(typeof ONBOARDING_TARGET_DATES)[keyof typeof ONBOARDING_TARGET_DATES];

export type OnboardingStore = {
	timeToHitGoal: OnbaordingTargetDate | undefined;
	averageCigarettesSmokedPerDay: number | undefined;
	cigarettesPerBox: number | undefined;
	boxPrice: string | undefined;
	name: string | undefined;
	currency: Currency | undefined;
	savedMoney: number | undefined;
};
