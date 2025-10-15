import { router } from "expo-router";
import { RadioGroup, SizableText, View, XStack } from "tamagui";
import { ScrollableScreen } from "@/components/Screens/ScrollableScreen";
import { OnboardingPage } from "@/Screens/Onboarding/components/OnboardingPage";
import { SelectableCard } from "@/Screens/Onboarding/SelectableCard";
import { useOnboardingStore } from "@/Screens/Onboarding/store";
import {
	ONBOARDING_TARGET_DATES,
	type OnboardingStore,
} from "@/Screens/Onboarding/types";

export default function Time() {
	const [{ timeToHitGoal }, setOnboardingStore] = useOnboardingStore();

	const navigateToNextPage = () => {
		router.push("/onboarding/startJourney");
	};

	return (
		<ScrollableScreen flex={1}>
			<OnboardingPage
				onNext={navigateToNextPage}
				title="Wie schnell möchtest Du dein Ziel erreichen?"
			>
				<SizableText>
					Wähle einen Plan, der zu Dir und deinen Zielen passt. Dies kannst Du
					jederzeit anpassen.
				</SizableText>
				<View gap="$2">
					<SelectableCard
						selected={timeToHitGoal === ONBOARDING_TARGET_DATES.FOURTEEN_DAYS}
						onPress={() =>
							setOnboardingStore((store: OnboardingStore) => ({
								...store,
								timeToHitGoal: ONBOARDING_TARGET_DATES.FOURTEEN_DAYS,
							}))
						}
					>
						<XStack flex={1} gap="$2">
							<View flex={1}>
								<SizableText size="$6">14 Tage</SizableText>
								<SizableText>
									Schneller Erfolg, aber auch mit mehr Risiko
								</SizableText>
							</View>
							<View justifyContent="center">
								<RadioGroup.Item size="$5" value="left">
									<RadioGroup.Indicator
										forceMount={
											timeToHitGoal === ONBOARDING_TARGET_DATES.FOURTEEN_DAYS
										}
									/>
								</RadioGroup.Item>
							</View>
						</XStack>
					</SelectableCard>
					<SelectableCard
						selected={timeToHitGoal === ONBOARDING_TARGET_DATES.THIRTY_DAYS}
						onPress={() =>
							setOnboardingStore((store: OnboardingStore) => ({
								...store,
								timeToHitGoal: ONBOARDING_TARGET_DATES.THIRTY_DAYS,
							}))
						}
					>
						<XStack flex={1} gap="$2">
							<View flex={1}>
								<SizableText size="$6">30 Tage</SizableText>
								<SizableText>Eine solide Gewohnheit aufbauen</SizableText>
							</View>
							<View justifyContent="center">
								<RadioGroup.Item size="$5" value="left">
									<RadioGroup.Indicator
										forceMount={
											timeToHitGoal === ONBOARDING_TARGET_DATES.THIRTY_DAYS
										}
									/>
								</RadioGroup.Item>
							</View>
						</XStack>
					</SelectableCard>
					<SelectableCard
						selected={timeToHitGoal === ONBOARDING_TARGET_DATES.THREE_MONTHS}
						onPress={() =>
							setOnboardingStore((store: OnboardingStore) => ({
								...store,
								timeToHitGoal: ONBOARDING_TARGET_DATES.THREE_MONTHS,
							}))
						}
					>
						<XStack flex={1} gap="$2">
							<View
								position="absolute"
								top="$-4"
								right="$-5"
								backgroundColor="$color.blue10Light"
								paddingVertical="$1"
								paddingHorizontal="$2"
								borderRadius="$4"
								transform="rotate(5deg)"
							>
								<SizableText color="$color.black12">
									Am beliebtesten!
								</SizableText>
							</View>
							<View flex={1}>
								<SizableText size="$6">3 Monate</SizableText>
								<SizableText>
									Eine gute Balance zwischen Geschwindigkeit und Sicherheit
								</SizableText>
							</View>
							<View justifyContent="center">
								<RadioGroup.Item size="$5" value="left">
									<RadioGroup.Indicator
										forceMount={
											timeToHitGoal === ONBOARDING_TARGET_DATES.THREE_MONTHS
										}
									/>
								</RadioGroup.Item>
							</View>
						</XStack>
					</SelectableCard>
					<SelectableCard
						selected={timeToHitGoal === ONBOARDING_TARGET_DATES.SIX_MONTHS}
						onPress={() =>
							setOnboardingStore((store: OnboardingStore) => ({
								...store,
								timeToHitGoal: ONBOARDING_TARGET_DATES.SIX_MONTHS,
							}))
						}
					>
						<XStack flex={1} gap="$2">
							<View flex={1}>
								<SizableText size="$6">6 Monate</SizableText>
								<SizableText>
									Die sicherste Option - Langsame Gewöhnung an dein neues Leben
								</SizableText>
							</View>
							<View justifyContent="center">
								<RadioGroup.Item size="$5" value="left">
									<RadioGroup.Indicator
										forceMount={
											timeToHitGoal === ONBOARDING_TARGET_DATES.SIX_MONTHS
										}
									/>
								</RadioGroup.Item>
							</View>
						</XStack>
					</SelectableCard>
				</View>
			</OnboardingPage>
		</ScrollableScreen>
	);
}
