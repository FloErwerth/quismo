import { createContext, type ReactNode, useContext, useState } from "react";
import { View } from "tamagui";

const StepperContext = createContext<
	| {
			nextStep: () => void;
			previousStep: () => void;
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
	pages: ReactNode[];
};

export const Stepper = ({ pages }: StepperProps) => {
	const [activeIndex, setActiveIndex] = useState(0);

	const increaseActiveIndex = () => {
		setActiveIndex(
			(activeIndex) => (activeIndex + 1) % Math.max(pages?.length, 1),
		);
	};

	const decreaseActiveIndex = () => {
		setActiveIndex((activeIndex) => Math.max(0, activeIndex - 1));
	};

	return (
		<StepperContext.Provider
			value={{
				nextStep: increaseActiveIndex,
				previousStep: decreaseActiveIndex,
			}}
		>
			<View>{pages[activeIndex]}</View>
		</StepperContext.Provider>
	);
};
