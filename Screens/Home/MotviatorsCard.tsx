import { Eye, Plus } from "@tamagui/lucide-icons";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { TouchableOpacity } from "react-native";
import { SizableText, View } from "tamagui";
import { Card } from "@/components/tamagui/Card";
import { getMotivationOptions } from "@/config/motivators";
import { useMotivationsStorage } from "@/storage/motivationsStorage";
export const MotviatorsCard = () => {
	const motivators = useMotivationsStorage((state) => state.motivations);
	const thoughts = useMotivationsStorage((state) => state.thoughts);

	const { t } = useTranslation();
	if (motivators.length === 0) {
		return null;
	}

	const motivationOptions = getMotivationOptions(t);

	return (
		<Card gap="$4">
			<SizableText size="$6">Deine Motivatoren</SizableText>
			<View gap="$2">
				{motivators.map((motivator) => {
					const hasThoughts = thoughts.some((thought) =>
						thought.id.includes(motivator),
					);
					return (
						<TouchableOpacity
							onPress={() =>
								router.push(`/preperation/motivators?motivatorId=${motivator}`)
							}
							key={motivator}
						>
							<Card
								flexDirection="row"
								borderWidth={1}
								borderColor={hasThoughts ? "$green6" : "$blue6"}
								backgroundColor={hasThoughts ? "$green4Light" : "$blue4Light"}
								alignItems="center"
								justifyContent="space-between"
							>
								<SizableText>{motivationOptions[motivator].label}</SizableText>
								{hasThoughts ? <Eye /> : <Plus />}
							</Card>
						</TouchableOpacity>
					);
				})}
			</View>
		</Card>
	);
};
