import {
	createContext,
	type ReactNode,
	useContext,
	useRef,
	useState,
	useTransition,
} from "react";

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

type StepperProps = {
	children: ReactNode[];
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
				(activeIndex) => (activeIndex + 1) % Math.max(children?.length, 1),
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
			{children[activeIndex]}
		</StepperContext.Provider>
	);
};
