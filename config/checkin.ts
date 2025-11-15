export const CheckInSmoked = {
	SMOKED: "SMOKED",
	NOT_SMOKED: "NOT_SMOKED",
} as const;

export const CheckInSmokedReasons = {
	// smoked reasons
	DETOXIFICATION: "DETOXIFICATION",
	EMOTIONAL_STRESS: "EMOTIONAL_STRESS",
	HABITS: "HABITS",
	SOCIAL_EVENTS: "SOCIAL_EVENTS",
	TOO_SECURE: "TOO_SECURE",

	// not smoked reasons
	DISTRACTION: "DISTRACTION",
	SUPPORT: "SUPPORT",
	BREATHING_EXERCISES: "BREATHING_EXERCISES",
	DRUGS: "DRUGS",
	OTHER: "OTHER",

	OWN_REASON: "OWN_REASON",
} as const;

export const CheckInFeelingsEnumValues = {
	VERY_HAPPY: "VERY_HAPPY",
	HAPPY: "HAPPY",
	NEUTRAL: "NEUTRAL",
	SAD: "SAD",
	VERY_SAD: "VERY_SAD",
	ANGRY: "ANGRY",
};

export type CheckInFeelings =
	(typeof CheckInFeelingsEnumValues)[keyof typeof CheckInFeelingsEnumValues];

export type CheckInSmokedReason =
	(typeof CheckInSmokedReasons)[keyof typeof CheckInSmokedReasons];

export type CheckInSmoked = (typeof CheckInSmoked)[keyof typeof CheckInSmoked];

export type CheckIn = {
	smoking?: CheckInSmoked;
	smokingReason?: {
		type: CheckInSmokedReason;
		reason?: string;
	};
	desireToSmoke?: number;
	feelings?: CheckInFeelings;
	feelingsReason?: string;
	confidence?: number;
	confidenceReason?: string;
};
