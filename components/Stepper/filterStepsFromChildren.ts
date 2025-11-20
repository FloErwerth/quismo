import {
	Children,
	isValidElement,
	type PropsWithChildren,
	type ReactElement,
	type ReactNode,
} from "react";
import { Step } from "@/components/Stepper/Step";

const isValidStep = (
	child: ReactNode,
): child is ReactElement<PropsWithChildren> => {
	return isValidElement(child) && child.type === Step;
};

export const filterStepsFromChildren = (children: ReactNode) => {
	return Children.toArray(children)
		.filter(isValidStep)
		.map((child) => child?.props?.children);
};
