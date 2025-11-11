import { type CardProps, Card as TamaguiCard } from "tamagui";

export const Card = ({ padded = true, ...cardProps }: CardProps) => {
	return <TamaguiCard padded={padded} elevate={false} {...cardProps} />;
};
