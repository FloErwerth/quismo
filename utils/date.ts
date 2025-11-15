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

export const getPartialsOfDate = (date: Date) => {
	const dateWithoutTimezone = new Date(
		date.getTime() - date.getTimezoneOffset() * 60000,
	);
	const split = dateWithoutTimezone.toISOString().split("T");

	return { date: split[0] as `${string}-${string}-${string}`, time: split[1] };
};

export const getISOStringFromDate = (date: Date) => {
	return date.toISOString();
};

export const getISODateFromToday = () => {
	return getPartialsOfDate(new Date()).date;
};
