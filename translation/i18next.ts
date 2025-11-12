import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import de from "./de";
import en from "./en";

export const defaultNS = "translation" as const;
export const resources = {
	de: { translation: de },
	en: { translation: en },
};

const getDeviceLanguage = () => {
	return "de";
};

i18next.use(initReactI18next).init({
	resources,
	defaultNS,
	lng: getDeviceLanguage(),
	fallbackLng: "de",
	interpolation: {
		escapeValue: false,
	},
	compatibilityJSON: "v4",
});

export default i18next;
