import { useTranslation } from "react-i18next";
import type { SelectableOptionsProps } from "@/components/SelectableOptions/SelectableOptions";

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
} as const;

export const CheckInFeelingsEnumValues = {
	STRESSED: "STRESSED",
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
	didSmoke?: CheckInSmoked;
	smokedReasonType: CheckInSmokedReason;
	smokedReasonText?: string;
	desireToSmoke?: number;
	feelings?: CheckInFeelings;
	feelingsReason?: string;
	confidence?: number;
	confidenceReason?: string;
};

export const useSelectableReasons = (): SelectableOptionsProps<
	{ value: CheckInSmokedReason; label: string }[]
>["items"] => {
	const { t } = useTranslation();
	return [
		{
			value: CheckInSmokedReasons.DETOXIFICATION,
			label: t(
				`checkIn.smokeStatusResult.yes.reasons.${CheckInSmokedReasons.DETOXIFICATION}`,
			),
		},
		{
			value: CheckInSmokedReasons.EMOTIONAL_STRESS,
			label: t(
				`checkIn.smokeStatusResult.yes.reasons.${CheckInSmokedReasons.EMOTIONAL_STRESS}`,
			),
		},
		{
			value: CheckInSmokedReasons.HABITS,
			label: t(
				`checkIn.smokeStatusResult.yes.reasons.${CheckInSmokedReasons.HABITS}`,
			),
		},
		{
			value: CheckInSmokedReasons.SOCIAL_EVENTS,
			label: t(
				`checkIn.smokeStatusResult.yes.reasons.${CheckInSmokedReasons.SOCIAL_EVENTS}`,
			),
		},
		{
			value: CheckInSmokedReasons.TOO_SECURE,
			label: t(
				`checkIn.smokeStatusResult.yes.reasons.${CheckInSmokedReasons.TOO_SECURE}`,
			),
		},
	];
};

export const useSelectableFeelings = (): SelectableOptionsProps<
	{ value: CheckInFeelings; label: string; emoji: string }[]
>["items"] => {
	const { t } = useTranslation();
	return [
		{
			value: CheckInFeelingsEnumValues.STRESSED,
			// HTML code: &#128516; (😄)
			// @ts-expect-error - Translation key exists but TypeScript can't infer it from template literal
			label: t(`checkIn.feelings.${CheckInFeelingsEnumValues.STRESSED}`),
			emoji: "😫",
		},
		{
			value: CheckInFeelingsEnumValues.HAPPY,
			// HTML code: &#128522; (😊)
			// @ts-expect-error - Translation key exists but TypeScript can't infer it from template literal
			label: t(`checkIn.feelings.${CheckInFeelingsEnumValues.HAPPY}`),
			emoji: "😊",
		},
		{
			value: CheckInFeelingsEnumValues.NEUTRAL,
			// HTML code: &#128528; (😐)
			// @ts-expect-error - Translation key exists but TypeScript can't infer it from template literal
			label: t(`checkIn.feelings.${CheckInFeelingsEnumValues.NEUTRAL}`),
			emoji: "😐",
		},
		{
			value: CheckInFeelingsEnumValues.SAD,
			// HTML code: &#128546; (😢)
			// @ts-expect-error - Translation key exists but TypeScript can't infer it from template literal
			label: t(`checkIn.feelings.${CheckInFeelingsEnumValues.SAD}`),
			emoji: "😢",
		},

		{
			value: CheckInFeelingsEnumValues.ANGRY,
			// HTML code: &#128544; (😠)
			// @ts-expect-error - Translation key exists but TypeScript can't infer it from template literal
			label: t(`checkIn.feelings.${CheckInFeelingsEnumValues.ANGRY}`),
			emoji: "😠",
		},
	];
};
