import { ArrowLeft } from "@tamagui/lucide-icons";
import { router } from "expo-router";
import { Button } from "@/components/tamagui/Button";

export const BackButton = () => {
	return (
		<Button
			unstyled
			size="$3"
			padding="$0"
			justifyContent="center"
			backgroundColor="transparent"
			onPress={() => router.back()}
		>
			<ArrowLeft />
		</Button>
	);
};
