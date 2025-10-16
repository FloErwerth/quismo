import { AlarmClock } from "@tamagui/lucide-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import type { TFunction } from "i18next";
import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, Progress, SizableText, View, XStack } from "tamagui";
import { ScrollableScreen } from "@/components/Screens/ScrollableScreen";
import { PreperationCard } from "@/features/phases/preperation/PreperationCard";
import { useStore } from "@/storage";

const getGreetingByTime = (t: TFunction) => {
	const hours = new Date().getHours();
	if (hours < 12) {
		return t("home.greeting.morning");
	} else if (hours < 18) {
		return t("home.greeting.afternoon");
	} else {
		return t("home.greeting.evening");
	}
};

const TimeUntilPhase2Display = () => {
	const phase1Since = useStore((state) => state.phase1Since);
	const intervalRef = useRef<ReturnType<typeof setInterval>>(null);
	const [timeUntilPhase2, setTimeUntilPhase2] = useState<
		{ days: number; hours: number } | undefined
	>(undefined);

	const getTimeUntilPhase2 = useCallback(() => {
		if (!phase1Since) {
			return undefined;
		}
		const phase2Date = new Date(phase1Since);
		phase2Date.setDate(phase2Date.getDate() + 7);
		const diffTime = Math.abs(Date.now() - phase2Date.getTime());

		const daysInMs = 1000 * 60 * 60 * 24;
		const days = Math.floor(diffTime / daysInMs);

		const hours = Math.floor((diffTime % daysInMs) / (1000 * 60 * 60));

		return { days, hours };
	}, [phase1Since]);

	useEffect(() => {
		setTimeUntilPhase2(getTimeUntilPhase2());
		intervalRef.current = setInterval(
			() => {
				setTimeUntilPhase2(getTimeUntilPhase2());
			},
			1000 * 60 * 60 * 24,
		);

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
				intervalRef.current = null;
			}
		};
	}, [getTimeUntilPhase2]);

	return (
		<View
			alignItems="center"
			alignSelf="flex-start"
			backgroundColor="$blue3Light"
			borderRadius="$6"
			padding="$2"
			gap="$1"
		>
			<AlarmClock size="$2" color="$blue11Light" />
			<SizableText size="$4">
				{timeUntilPhase2?.days}d {timeUntilPhase2?.hours}h
			</SizableText>
			<SizableText size="$2">bis Phase 2</SizableText>
		</View>
	);
};

const Phase1Card = () => {
	return (
		<Card padded elevate gap="$4">
			<XStack flex={1}>
				<View flex={1}>
					<SizableText size="$6" color="$blue11Light">
						Phase 1
					</SizableText>
					<SizableText size="$8">Vorbereitung auf den Rauchstopp</SizableText>
				</View>
				<TimeUntilPhase2Display />
			</XStack>
			<Progress backgroundColor="$blue4Light" value={50}>
				<Progress.Indicator backgroundColor="$blue11Light" />
			</Progress>
			<SizableText>Du hast 0 von 4 Vorbereitungsaufgaben erledigt</SizableText>
		</Card>
	);
};

export const HomeScreen = () => {
	const name = useStore((state) => state.name);
	const { t } = useTranslation();

	return (
		<ScrollableScreen>
			<XStack alignItems="center" gap="$2">
				<Image
					source={require("@/assets/images/icon.png")}
					style={{ width: 60, height: 60 }}
				/>
				<View>
					<SizableText>{getGreetingByTime(t)}</SizableText>
					<SizableText size="$8" fontWeight="bold">
						{name}
					</SizableText>
				</View>
			</XStack>
			<Phase1Card />
			<View gap="$2">
				<SizableText>Deine Vorbereitungsaufgaben</SizableText>
				<PreperationCard
					onPress={() => router.push("/preperationMotivation")}
					title="Motivation"
					description="Halte deine Motivationen fest"
					completed={false}
				/>
				<PreperationCard
					onPress={() => router.push("/preperationAnalysis")}
					title="Analyse"
					description="Halte fest, warum du rauchen willst"
					completed={false}
				/>
				<PreperationCard
					onPress={() => router.push("/preperationSupport")}
					title="Unterstützung"
					description="Lege deine Unterstützer fest"
					completed={false}
				/>
				<PreperationCard
					onPress={() => router.push("/preperationAlternatives")}
					title="Alternativen"
					description="Lerne alternativen zum Rauchen kennen"
					completed={false}
				/>
			</View>
		</ScrollableScreen>
	);
};
