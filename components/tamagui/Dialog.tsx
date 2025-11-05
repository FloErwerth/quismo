import {
	type DialogProps,
	SizableText,
	Dialog as TamaguiDialog,
	View,
} from "tamagui";

export const Dialog = ({
	modal = true,
	dismissOnOverlayPress = true,
	title,
	onAfterCloseAnimation,
	...props
}: DialogProps & {
	dismissOnOverlayPress?: boolean;
	title?: string;
	onAfterCloseAnimation?: () => void;
}) => {
	const handleOverlayPress = () => {
		if (dismissOnOverlayPress) {
			props.onOpenChange?.(false);
		}
	};

	return (
		<TamaguiDialog modal={modal} {...props}>
			<TamaguiDialog.Portal>
				<TamaguiDialog.Overlay
					key="overlay"
					opacity={0.8}
					animateOnly={["transform", "opacity"]}
					animation={[
						"quicker",
						{
							opacity: {
								overshootClamping: true,
							},
						},
					]}
					enterStyle={{ opacity: 0 }}
					exitStyle={{ opacity: 0 }}
					onPress={handleOverlayPress}
				/>
				<TamaguiDialog.Content
					margin="$4"
					borderRadius="$6"
					key="content"
					animateOnly={["transform", "opacity"]}
					animation={[
						"quicker",
						{
							opacity: {
								overshootClamping: true,
							},
						},
					]}
					enterStyle={{
						x: 0,
						opacity: 0,
						rotate: "5deg",
						scale: 0.95,
					}}
					exitStyle={{ x: 0, opacity: 0, rotate: "-5deg", scale: 1.05 }}
				>
					{title && (
						<View marginBottom="$2">
							<SizableText size="$8">{title}</SizableText>
						</View>
					)}
					{props.children}
				</TamaguiDialog.Content>
			</TamaguiDialog.Portal>
		</TamaguiDialog>
	);
};
