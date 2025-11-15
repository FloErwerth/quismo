import { useState } from "react";
import type { LayoutChangeEvent } from "react-native";

export const useElementMeasurement = () => {
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);

	const measure = (layout: LayoutChangeEvent) => {
		if (width && height) {
			return;
		}
		setWidth(layout.nativeEvent.layout.width);
		setHeight(layout.nativeEvent.layout.height);
	};

	return { width, height, measure };
};
