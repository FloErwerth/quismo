import { useTranslation } from "react-i18next";
import { useWindowDimensions } from "react-native";
import Animated, { ZoomIn } from "react-native-reanimated";
import { SizableText, View } from "tamagui";
import { StepperPage } from "@/components/Stepper/StepperPage";
import { Button } from "@/components/tamagui/Button";
import { useSelectableFeelings } from "@/config/checkin";
import { useCurrentCheckIn } from "@/Screens/CheckIn/hooks/useCurrentCheckIn";
import { useStoreSelector } from "@/storage/storage";

const buttonSize = 80;

export const CheckInSelectFeelingPage = () => {
	const { t } = useTranslation();
	const updateCheckIn = useStoreSelector((state) => state.updateCheckIn);
	const { timestamp, checkIn } = useCurrentCheckIn();
	const selectableFeelings = useSelectableFeelings();
	const { width } = useWindowDimensions();
	const circleRadius = width / 3;

	const positionedFeelings = (() => {
		return selectableFeelings.map((feeling, index) => {
			// Start from top (90 degrees offset) and distribute evenly
			const angle =
				Math.PI / 2 - (index * (2 * Math.PI)) / selectableFeelings.length;
			const x = circleRadius * Math.cos(angle);
			const y = circleRadius * Math.sin(angle);
			return {
				...feeling,
				angle,
				x,
				y,
			};
		});
	})();

	const handleSelectFeeling = (
		feeling: (typeof positionedFeelings)[number],
	) => {
		updateCheckIn(timestamp, {
			feelings: feeling.value,
		});
	};

	return (
		<StepperPage
			bubbleTextConfig={{
				imageConfig: {
					source: require("@/assets/images/smoqui_note.png"),
					width: 150,
					height: 100,
				},
				arrowPosition: "right",
				text: t("checkIn.feelings.title"),
			}}
		>
			<SizableText size="$6">{t("checkIn.feelings.description")}</SizableText>
			<View flex={1} justifyContent="center">
				<View
					width={circleRadius * 2 + buttonSize}
					height={circleRadius * 2 + buttonSize}
					alignSelf="center"
					justifyContent="center"
				>
					{positionedFeelings.map((feeling, index) => {
						const isSelected = checkIn?.feelings === feeling.value;
						return (
							<View
								key={feeling.value}
								position="absolute"
								left={circleRadius + feeling.x}
								top={circleRadius + feeling.y}
								width={buttonSize}
								height={buttonSize}
							>
								<Animated.View
									entering={ZoomIn.delay(index * 100)
										.springify(100)
										.damping(80)
										.stiffness(200)}
								>
									<Button
										variant="ghost"
										onPress={() => handleSelectFeeling(feeling)}
										opacity={isSelected ? 1 : 0.6}
										pressStyle={{
											scale: 0.9,
											backgroundColor: "transparent",
											opacity: isSelected ? 1 : 0.8,
										}}
										scale={isSelected ? 1.2 : 1}
										animation="quick"
										width={buttonSize}
										height={buttonSize}
										padding={0}
									>
										<View>
											<SizableText
												adjustsFontSizeToFit={true}
												fontSize={buttonSize / 2}
												lineHeight={buttonSize * 0.66}
												textAlign="center"
												justifyContent="center"
												alignItems="center"
											>
												{feeling.emoji}
											</SizableText>
											<SizableText textAlign="center" size="$3">
												{feeling.label}
											</SizableText>
										</View>
									</Button>
								</Animated.View>
							</View>
						);
					})}
				</View>
			</View>
		</StepperPage>
	);
};
