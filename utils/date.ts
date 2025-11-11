export const formatDate = (date: Date) => {
	return date.toLocaleDateString("de-DE", {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
	});
};

export const formatTime = (date: Date) => {
	return date.toLocaleTimeString("de-DE", {
		hour: "2-digit",
		minute: "2-digit",
	});
};

export const getPartialsOfDate = (date: Date | undefined) => {
	if (date === undefined) {
		return null;
	}

	const internalDate = new Date(date);

	// return if date is invalid
	if (
		internalDate === null ||
		internalDate === undefined ||
		internalDate.toString() === "Invalid Date"
	) {
		return null;
	}

	const split = internalDate.toISOString().split("T");

	return { date: split[0], time: split[1] };
};
