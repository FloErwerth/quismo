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
	...props
}: ScreenProps) => {
	const hasActionOrBack = !!back || !!action;
	const { top } = useSafeAreaInsets();

	return (
		<View padding="$4" paddingTop={top || "$4"} gap="$4" {...props}>
			{(back || title || action) && (
				<XStack alignItems="center">
					<View flex={hasActionOrBack ? 0.2 : 0}>
						<BackButton />
					</View>
					<View flex={1}>
						{title && (
							<SizableText size="$9" textAlign="center">
								{title}
							</SizableText>
						)}
					</View>
					<View flex={hasActionOrBack ? 0.2 : 0} alignItems="flex-end">
						{action}
					</View>
				</XStack>
			)}
			{children}
		</View>
	);
};
