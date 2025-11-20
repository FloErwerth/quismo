import React, {
	Children,
	createContext,
	type ReactElement,
	type ReactNode,
	useContext,
	useRef,
	useState,
	useTransition,
} from "react";
import { filterStepsFromChildren } from "@/components/Stepper/filterStepsFromChildren";
import type { StepperPageProps } from "@/components/Stepper/StepperPage";

const StepperContext = createContext<
	| {
			nextStep: () => void;
			previousStep: () => void;
			activeIndex: number;
			direction: "forward" | "backward";
	  }
	| undefined
>(undefined);

export const useStepper = () => {
	const context = useContext(StepperContext);
	if (!context) {
		throw new Error("useStepper must be used within a Stepper");
	}
	return context;
};

const getChildByDisplayName = (
	displayName: string,
	props: { children: ReactElement<StepperPageProps> },
) => {
	const child = React.Children.map(
		props.children,
		(child: ReactElement<StepperPageProps> | null | undefined) => {
			// you can access displayName property by child.type.displayName
			if (child?.type === displayName) {
				return child;
			}
			return null as unknown as ReactElement<StepperPageProps>;
		},
	);
	return child as unknown as ReactElement<StepperPageProps>;
};

type StepperProps = {
	children: ReactNode;
};
export const Stepper = ({ children }: StepperProps) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [direction, setDirection] = useState<"forward" | "backward">("forward");
	const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);
	const [_, setTransitioning] = useTransition();

	const clearCurrentTimeout = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
			timeoutRef.current = null;
		}
	};

	const increaseActiveIndex = () => {
		clearCurrentTimeout();
		setDirection("forward");
		setTransitioning(() => {
			setActiveIndex(
				(activeIndex) =>
					(activeIndex + 1) % Math.max(Children.toArray(children).length, 1),
			);
		});
	};

	const decreaseActiveIndex = () => {
		clearCurrentTimeout();
		setDirection("backward");
		setTransitioning(() => {
			setActiveIndex((activeIndex) => Math.max(0, activeIndex - 1));
		});
	};

	return (
		<StepperContext.Provider
			value={{
				nextStep: increaseActiveIndex,
				previousStep: decreaseActiveIndex,
				activeIndex,
				direction,
			}}
		>
			{filterStepsFromChildren(children)[activeIndex]}
		</StepperContext.Provider>
	);
};
