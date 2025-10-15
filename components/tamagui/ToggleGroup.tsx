import {
	styled,
	ToggleGroup as ToggleGroupCore,
	withStaticProperties,
} from "tamagui";

export const ToggleGroup = withStaticProperties(
	styled(ToggleGroupCore, { type: "single" }),
	{
		Item: styled(ToggleGroupCore.Item, {
			variants: {
				active: {
					true: {
						backgroundColor: "$color.blue6Light",
					},
				},
			},
		}),
	},
);
