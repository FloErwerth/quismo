import { ChevronDown } from "@tamagui/lucide-icons";
import { type PropsWithChildren, useId } from "react";
import {
	type AccordionMultipleProps,
	Accordion as AccordionTamagui,
	SizableText,
	Square,
	View,
	withStaticProperties,
} from "tamagui";

type AccordionItemProps = {
	value: string;
	itemTitle: string;
} & PropsWithChildren;

const AccordionItem = ({
	itemTitle,
	children,
}: {
	itemTitle: string;
	children: React.ReactNode;
}) => {
	const id = useId();
	return (
		<AccordionTamagui.Item value={id}>
			<AccordionTamagui.Trigger
				borderWidth="$0"
				padding={0}
				backgroundColor="transparent"
			>
				{({ open }: { open: boolean }) => (
					<View
						borderTopLeftRadius="$4"
						borderTopRightRadius="$4"
						borderBottomLeftRadius={open ? "$0" : "$4"}
						borderBottomRightRadius={open ? "$0" : "$4"}
						padding="$4"
						overflow="hidden"
						backgroundColor="$background"
						flexDirection="row"
						justifyContent="space-between"
					>
						<SizableText size="$6">{itemTitle}</SizableText>
						<Square animation="quick" rotate={open ? "180deg" : "0deg"}>
							<ChevronDown size="$1" />
						</Square>
					</View>
				)}
			</AccordionTamagui.Trigger>
			<AccordionTamagui.HeightAnimator animation="slow">
				<AccordionTamagui.Content
					borderBottomLeftRadius="$4"
					borderBottomRightRadius="$4"
				>
					{children}
				</AccordionTamagui.Content>
			</AccordionTamagui.HeightAnimator>
		</AccordionTamagui.Item>
	);
};

const AccordionWrapper = ({
	children,
	...props
}: Omit<AccordionMultipleProps, "type">) => {
	return (
		<AccordionTamagui gap="$4" type="multiple" {...props}>
			{children}
		</AccordionTamagui>
	);
};

export const Accordion = withStaticProperties(AccordionWrapper, {
	Item: AccordionItem,
});
