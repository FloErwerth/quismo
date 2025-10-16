import { Check, ChevronRight } from "@tamagui/lucide-icons";
import { Pressable } from "react-native";
import { Card, Checkbox, SizableText, View, XStack } from "tamagui";

type PreperationCardProps = {
	title: string;
	description: string;
	completed: boolean;
	onPress: () => void;
};

export const PreperationCard = ({
	title,
	description,
	completed,
	onPress,
}: PreperationCardProps) => {
	return (
		<Pressable onPress={onPress}>
			<Card padded elevate>
				<XStack flex={1} alignItems="center" justifyContent="space-between">
					<XStack flex={1} alignItems="center" gap="$4">
						<Checkbox borderRadius="$12" size="$6">
							<Checkbox.Indicator forceMount={completed}>
								<Check
									size="$1"
									color={completed ? "$green11Light" : "$gray11Light"}
								/>
							</Checkbox.Indicator>
						</Checkbox>
						<View flex={1}>
							<SizableText size="$8">{title}</SizableText>
							<SizableText flex={1}>{description}</SizableText>
						</View>
					</XStack>
					<View>
						<ChevronRight />
					</View>
				</XStack>
			</Card>
		</Pressable>
	);
};
