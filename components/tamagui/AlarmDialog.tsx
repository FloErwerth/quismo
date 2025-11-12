import type { ComponentProps } from "react";
import { useTranslation } from "react-i18next";
import { XStack } from "tamagui";
import { Button } from "@/components/tamagui/Button";
import { Dialog } from "@/components/tamagui/Dialog";

type AlarmDialogProps = {
	onConfirm?: () => void;
	onCancel?: () => void;
	confirmButtonLabel?: string;
	cancelButtonLabel?: string;
} & ComponentProps<typeof Dialog>;

export const AlarmDialog = ({
	onConfirm,
	onCancel,
	confirmButtonLabel,
	cancelButtonLabel,
	...props
}: AlarmDialogProps) => {
	const { t } = useTranslation();

	const handleConfirm = () => {
		onConfirm?.();
		props.onOpenChange?.(false);
	};

	const handleCancel = () => {
		onCancel?.();
		props.onOpenChange?.(false);
	};

	return (
		<Dialog {...props}>
			{props.children}
			<XStack gap="$4" marginTop="$4">
				<Button onPress={handleConfirm} variant="secondary" flex={1}>
					{confirmButtonLabel || t("common.confirm")}
				</Button>
				<Button onPress={handleCancel} variant="secondary" flex={1}>
					{cancelButtonLabel || t("common.cancel")}
				</Button>
			</XStack>
		</Dialog>
	);
};
