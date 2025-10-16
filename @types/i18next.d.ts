import type { resources } from "../translation/i18next";

declare module "i18next" {
	interface CustomTypeOptions {
		resources: (typeof resources)["de"];
	}
}
