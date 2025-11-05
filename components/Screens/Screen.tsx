import type { PropsWithChildren, ReactNode } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SizableText, View, type ViewProps, XStack } from "tamagui";
import { BackButton } from "@/components/BackButton/BackButtont";

export type ScreenProps = PropsWithChildren &
	ViewProps & {
		back?: boolean;
		title?: string;
		action?: ReactNode;
	};

export const Screen = ({
	children,
	back = false,
	title,
	action,
	gap = "$4",
	marginTop = "$4",
	...props
}: ScreenProps) => {
	const hasActionOrBack = !!back || !!action;
	const { top } = useSafeAreaInsets();

	return (
		<View padding="$4" paddingTop={top || "$4"} {...props}>
			{(back || title || action) && (
				<XStack alignItems="center">
					{hasActionOrBack && (
						<View flex={0.2}>
							<BackButton />
						</View>
					)}
					<View flex={1}>
						{title && (
							<SizableText flex={1} size="$10" textAlign="center">
								{title}
							</SizableText>
						)}
					</View>
					{hasActionOrBack && (
						<View flex={0.2} alignItems="flex-end">
							{action}
						</View>
					)}
				</XStack>
			)}
			<View gap={gap} flex={props.flex} marginTop={marginTop}>
				{children}
			</View>
		</View>
	);
};
