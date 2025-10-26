import type { ComponentProps } from "react";
import { Progress as ProgressTamagui } from "tamagui";

export const Progress = ({
	value,
}: Pick<ComponentProps<typeof ProgressTamagui>, "value">) => {
	return (
		<ProgressTamagui backgroundColor="$blue4Light" value={value}>
			<ProgressTamagui.Indicator backgroundColor="$blue11Light" />
		</ProgressTamagui>
	);
};
