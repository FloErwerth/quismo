import type { TFunction } from "i18next";

export const getMotivationOptions = (t: TFunction) =>
	({
		family: {
			id: "family",
			label: t("phases.preperation.motivation.categories.family"),
		},
		freedom: {
			id: "freedom",
			label: t("phases.preperation.motivation.categories.freedom"),
		},
		pregnancy: {
			id: "pregnancy",
			label: t("phases.preperation.motivation.categories.pregnancy"),
		},
		finance: {
			id: "finance",
			label: t("phases.preperation.motivation.categories.finance"),
		},
		kids: {
			id: "kids",
			label: t("phases.preperation.motivation.categories.kids"),
		},
		health: {
			id: "health",
			label: t("phases.preperation.motivation.categories.health"),
		},
		partner: {
			id: "partner",
			label: t("phases.preperation.motivation.categories.partner"),
		},
		sex: {
			id: "sex",
			label: t("phases.preperation.motivation.categories.sex"),
		},
		fitness: {
			id: "fitness",
			label: t("phases.preperation.motivation.categories.fitness"),
		},
		smell: {
			id: "smell",
			label: t("phases.preperation.motivation.categories.smell"),
		},
		taste: {
			id: "taste",
			label: t("phases.preperation.motivation.categories.taste"),
		},
		disease: {
			id: "disease",
			label: t("phases.preperation.motivation.categories.disease"),
		},
		experiences: {
			id: "experiences",
			label: t("phases.preperation.motivation.categories.experiences"),
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
	kids: {
		description:
			"Reflektiere über dein Rauchverhalten im Bezug auf deine Kinder",
		help: "Denke zum Beispiel darüber nach welche gesundheitlichen Folgen passivrauchen für deine Kinder hat",
	},
	partner: {
		description:
			"Reflektiere über dein Rauchverhalten im Bezug auf deinen Partner",
		help: "Denke zum Beispiel darüber nach welche gesundheitlichen Folgen passivrauchen für deinen Partner hat",
	},
	sex: {
		description:
			"Reflektiere über dein Rauchverhalten im Bezug auf deine Sexleben",
		help: "Denke zum Beispiel darüber nach welche gesundheitlichen Folgen passivrauchen für dein Sexleben hat",
	},
	fitness: {
		description:
			"Reflektiere über dein Rauchverhalten im Bezug auf deine Fitness",
		help: "Denke zum Beispiel darüber nach welche gesundheitlichen Folgen passivrauchen für deine Fitness hat",
	},
	smell: {
		description:
			"Reflektiere über dein Rauchverhalten im Bezug auf deine Geruchsqualität",
		help: "Denke zum Beispiel darüber nach welche gesundheitlichen Folgen passivrauchen für deine Geruchsqualität hat",
	},
	taste: {
		description:
			"Reflektiere über dein Rauchverhalten im Bezug auf deine Geschmacksqualität",
		help: "Denke zum Beispiel darüber nach welche gesundheitlichen Folgen passivrauchen für deine Geschmacksqualität hat",
	},
	disease: {
		description:
			"Reflektiere über dein Rauchverhalten im Bezug auf deine Krankheiten",
		help: "Denke zum Beispiel darüber nach welche gesundheitlichen Folgen passivrauchen für deine Krankheiten hat",
	},
	experiences: {
		description:
			"Reflektiere über dein Rauchverhalten im Bezug auf deine Erfahrungen",
		help: "Denke zum Beispiel darüber nach welche gesundheitlichen Folgen passivrauchen für deine Erfahrungen hat",
	},
};
