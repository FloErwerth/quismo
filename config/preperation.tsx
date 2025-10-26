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
