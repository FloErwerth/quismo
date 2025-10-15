import type { Smile } from "@tamagui/lucide-icons";
import type { ComponentProps, FC } from "react";
import { SizableText, View, XStack } from "tamagui";

type OnboardingHeaderProps = {
	title: string;
	Icon: FC<ComponentProps<typeof Smile>>;
};

export const OnboardingHeader = ({ title, Icon }: OnboardingHeaderProps) => {
	return (
		<XStack alignItems="center" gap="$2">
			<View padding="$2" borderRadius="$4" backgroundColor="$color.green5Light">
				<Icon />
			</View>
			<View>
				<SizableText size="$6">{title}</SizableText>
			</View>
		</XStack>
	);
};
