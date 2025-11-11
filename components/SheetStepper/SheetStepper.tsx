import { ArrowLeft } from "@tamagui/lucide-icons";
import type { PropsWithChildren, ReactElement } from "react";
import { TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
	type SheetProps,
	SizableText,
	View,
	withStaticProperties,
	XStack,
} from "tamagui";
import { Stepper, useStepper } from "@/components/Stepper/Stepper";
import { Button } from "@/components/tamagui/Button";
import { Sheet } from "@/components/tamagui/Sheet";

type SheetStepperPageProps = {
	title: string;
	showBackButton?: boolean;
	confirmButtonText?: string;
} & PropsWithChildren;

const SheetStepperPage = ({
	title,
	children,
	showBackButton = true,
	confirmButtonText,
}: SheetStepperPageProps) => {
	const { previousStep, nextStep } = useStepper();
	const { bottom = 32 } = useSafeAreaInsets();
	return (
		<View flex={1} paddingBottom={bottom} gap="$4">
			<XStack alignItems="center">
				<View flex={0.2}>
					{showBackButton && (
						<TouchableOpacity onPress={previousStep}>
							<ArrowLeft />
						</TouchableOpacity>
					)}
				</View>
				<SizableText flex={0.8} size="$8" textAlign="center">
					{title}
				</SizableText>
				<View flex={0.2}></View>
			</XStack>
			<View flex={1}>{children}</View>
			<Button onPress={nextStep}>{confirmButtonText}</Button>
		</View>
	);
};

type SheetStepperProps = Omit<SheetProps, "children"> & {
	children: ReactElement<SheetStepperPageProps>[];
};

const _SheetStepper = ({ children, ...props }: SheetStepperProps) => {
	return (
		<Sheet flex={1} snapPoints={[50]} snapPointsMode="percent" {...props}>
			<Stepper>{children}</Stepper>
		</Sheet>
	);
};

export const SheetStepper = withStaticProperties(_SheetStepper, {
	Page: SheetStepperPage,
});
