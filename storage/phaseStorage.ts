import AsyncStorage from "@react-native-async-storage/async-storage";
import { createJSONStorage, persist } from "zustand/middleware";
import { create } from "zustand/react";
import type { Motivation } from "@/config/preperation";

export type QuestionAnswer = { id: string; question?: string; answer: string };

type PreperationStoreValues = {
	motivations: Motivation[];
};

type PreperationStoreActions = {
	addMotivation: (motivation: Motivation) => void;
	removeMotivation: (motivationId: Motivation) => void;
};

export const usePreperationStore = create(
	persist<PreperationStoreValues & PreperationStoreActions>(
		(set) => ({
			motivations: [],
			addMotivation: (motivation: Motivation) =>
				set((state) => ({
					motivations: [...state.motivations, motivation],
				})),
			removeMotivation: (motivationId: Motivation) =>
				set((state) => ({
					motivations: state.motivations.filter(
						(motivation) => motivation !== motivationId,
					),
				})),
		}),
		{
			name: "preperation-storage",
			storage: createJSONStorage(() => AsyncStorage),
		},
	),
);
