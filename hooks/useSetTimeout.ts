import { useCallback, useEffect, useRef } from "react";

export const useSetTimeout = () => {
	const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

	const doSetTimeout = (callback: () => void, delay: number) => {
		timeoutRef.current = setTimeout(callback, delay);
	};

	const clear = useCallback(() => {
		if (timeoutRef.current !== undefined) {
			clearTimeout(timeoutRef.current);
			timeoutRef.current = undefined;
		}
	}, []);

	useEffect(() => {
		return () => {
			clear();
		};
	}, [clear]);

	return { setTimeout: doSetTimeout, clear };
};
