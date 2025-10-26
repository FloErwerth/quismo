export const isValidDecimalNumber = (text: string) => {
	return /^(\d+)?([.,]?\d{0,})?$/.test(text);
};

export const parseDecimalNumber = (text: string) => {
	if (!text) {
		return undefined;
	}

	return Number.parseFloat(text.replace(",", "."));
};
