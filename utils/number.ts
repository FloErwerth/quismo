export const safeParseFloat = (
	value: string | undefined,
): number | undefined => {
	if (value === undefined || value === "") {
		return undefined;
	}

	const parsed = Math.round(parseFloat(value) * 100) / 100;
	return parsed;
};
