import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import type { Motivation } from "@/config/motivators";
import { createSelectors } from "@/storage/utils";

type MotivationState = {
	motivations: Motivation[];
	thoughts: {
		id: `${Motivation}-${string}`;
		thought: string;
		createdAt: string;
	}[];
};

type MotivationsActions = {
	addMotivation: (motivation: Motivation) => void;
	removeMotivation: (motivationId: Motivation) => void;
	addThoughtByMotivation: (motivationId: Motivation, thought: string) => void;
	removeThoughtByThoughtId: (thoughtId: string) => void;
	updateThoughtByThoughtId: (thoughtId: string, thought: string) => void;
	resetMotivationsStorage: () => void;
	setupTestMotivationsStorage: () => void;
};

export const useMotivationsStorage = create(
	persist(
		immer<MotivationState & MotivationsActions>((set) => ({
			motivations: [],
			thoughts: [],
			addMotivation: (motivation: Motivation) =>
				set((state) => ({
					motivations: [...state.motivations, motivation],
				})),
			removeMotivation: (motivation: Motivation) =>
				set((state) => ({
					motivations: state.motivations.filter(
						(storedMotivations) => storedMotivations !== motivation,
					),
				})),
			addThoughtByMotivation: (motivation: Motivation, thought: string) =>
				set((state) => {
					const today = new Date().toISOString();
					state.thoughts.push({
						thought,
						id: `${motivation}-${today}`,
						createdAt: today,
					});
				}),
			removeThoughtByThoughtId: (thoughtId: string) =>
				set((state) => {
					state.thoughts = state.thoughts.filter(
						(thought) => thought.id !== thoughtId,
					);
				}),
			updateThoughtByThoughtId: (thoughtId: string, thought: string) =>
				set((state) => {
					const thoughtIndex = state.thoughts.findIndex(
						(thought) => thought.id === thoughtId,
					);
					if (thoughtIndex === -1) {
						return;
					}
					const foundThought = state.thoughts[thoughtIndex];

					state.thoughts.splice(thoughtIndex, 1, { ...foundThought, thought });
				}),
			resetMotivationsStorage: () => set({ motivations: [], thoughts: [] }),
			setupTestMotivationsStorage: () =>
				set({ motivations: ["health", "family", "finance"], thoughts: [] }),
		})),
		{
			name: "quismo-motivations-storage",
			storage: createJSONStorage(() => AsyncStorage),
		},
	),
);

export const useMotivationsStorageSelector = createSelectors(
	useMotivationsStorage,
);
