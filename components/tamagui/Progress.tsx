import { useEffect, useRef, useState } from "react";
import { type ProgressProps, Progress as ProgressTamagui } from "tamagui";

export const Progress = ({ value, ...props }: ProgressProps) => {
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef<ReturnType<typeof setTimeout>>(null);

	useEffect(() => {
		ref.current = setTimeout(() => {
			setIsVisible(true);
		}, 200);

		return () => {
			if (ref.current) {
				clearTimeout(ref.current);
				ref.current = null;
			}
		};
	}, []);

	return (
		<ProgressTamagui backgroundColor="$blue4Light" value={value} {...props}>
			<ProgressTamagui.Indicator
				opacity={isVisible ? 1 : 0}
				backgroundColor="$blue11Light"
			/>
		</ProgressTamagui>
	);
};
