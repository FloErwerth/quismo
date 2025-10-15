export const currencies = {
	EUR: "Euro",
	USD: "US-Dollar",
	GBP: "Pfund",
} as const;

export const currenciesArray = Object.keys(currencies) as Currency[];

export type Currency = keyof typeof currencies;
