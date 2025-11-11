import type { TFunction } from "i18next";

export const getMotivationOptions = (t: TFunction) =>
	({
		health: {
			id: "health",
			label: t("motivation.categories.health"),
		},
		family: {
			id: "family",
			label: t("motivation.categories.family"),
		},
		freedom: {
			id: "freedom",
			label: t("motivation.categories.freedom"),
		},
		pregnancy: {
			id: "pregnancy",
			label: t("motivation.categories.pregnancy"),
		},
		finance: {
			id: "finance",
			label: t("motivation.categories.finance"),
		},
		wellBeing: {
			id: "wellBeing",
			label: t("motivation.categories.wellBeing"),
		},
		experiences: {
			id: "experiences",
			label: t("motivation.categories.experiences"),
		},
	}) as const;

export type Motivation = keyof ReturnType<typeof getMotivationOptions>;

export const motivatorsPageTexts: Record<
	Motivation,
	{ description: string; help: string }
> = {
	family: {
		description:
			"Reflektiere über dein Rauchverhalten im Bezug auf deine Familie",
		help: "Denke zum Beispiel darüber nach welches Vorbild Du für deine Kinder sein möchtest oder welche gesundheitlichen Folgen passivrauchen für deine Kinder hat",
	},
	health: {
		description:
			"Reflektiere über dein Rauchverhalten im Bezug auf deine Gesundheit",
		help: "Denke zum Beispiel darüber nach welche gesundheitlichen Folgen passivrauchen für dich hat",
	},
	finance: {
		description:
			"Reflektiere über dein Rauchverhalten im Bezug auf deine Finanzen",
		help: "Denke zum Beispiel darüber nach welche finanziellen Folgen passivrauchen für dich hat",
	},
	freedom: {
		description:
			"Reflektiere über dein Rauchverhalten im Bezug auf deine Freiheit",
		help: "Denke zum Beispiel darüber nach welche freiheitsbeschränkenden Folgen passivrauchen für dich hat",
	},
	pregnancy: {
		description:
			"Reflektiere über dein Rauchverhalten im Bezug auf deine Schwangerschaft",
		help: "Denke zum Beispiel darüber nach welche gesundheitlichen Folgen passivrauchen für deine Schwangerschaft hat",
	},
	experiences: {
		description:
			"Reflektiere über dein Rauchverhalten im Bezug auf deine Erfahrungen",
		help: "Denke zum Beispiel darüber nach welche gesundheitlichen Folgen passivrauchen für deine Erfahrungen hat",
	},
	wellBeing: {
		description:
			"Reflektiere über dein Rauchverhalten im Bezug auf deine Wohlbefinden",
		help: "Denke zum Beispiel darüber nach welche gesundheitlichen Folgen passivrauchen für deine Wohlbefinden hat",
	},
};

export const getMotivatorOnboardingMotivationResultsTexts = (
	t: TFunction,
): Record<Motivation, { description: string }> => ({
	family: {
		description: t("concerns.goodNews.family"),
	},
	health: {
		description: t("concerns.goodNews.health"),
	},
	finance: {
		description: t("concerns.goodNews.finance"),
	},
	freedom: {
		description: t("concerns.goodNews.freedom"),
	},
	pregnancy: {
		description: t("concerns.goodNews.pregnancy"),
	},
	experiences: {
		description: t("concerns.goodNews.experiences"),
	},
	wellBeing: {
		description: t("concerns.goodNews.wellBeing"),
	},
});

export const getConcernOptions = (t: TFunction) =>
	({
		weightGain: {
			id: "weightGain",
			label: t("concerns.categories.weightGain"),
		},
		strongCravings: {
			id: "strongCravings",
			label: t("concerns.categories.strongCravings"),
		},
		moodChanges: {
			id: "moodChanges",
			label: t("concerns.categories.moodChanges"),
		},
		stress: {
			id: "stress",
			label: t("concerns.categories.stress"),
		},
		depression: {
			id: "depression",
			label: t("concerns.categories.depression"),
		},
		fomo: {
			id: "fomo",
			label: t("concerns.categories.fomo"),
		},
	}) as const;

export type Concern = keyof ReturnType<typeof getConcernOptions>;
