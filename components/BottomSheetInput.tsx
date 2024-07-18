import { ButtonText, Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicatorWrapper, ActionsheetDragIndicator, ActionsheetItem, ActionsheetItemText, Box, Button, Input, InputField, Pressable } from "@gluestack-ui/themed";
import React from "react";

export default function BottomSheetInput({ placeholder, onValue }: { placeholder?: string, onValue: (value: any) => void }) {
    const [showActionsheet, setShowActionsheet] = React.useState(false);
    const handleClose = () => setShowActionsheet(!showActionsheet);

    const handlePress = (value: any) => {
        onValue(value)
        handleClose()
    }
    return <Box>
        <Button onPress={handleClose}>
            <ButtonText>Open</ButtonText>
        </Button>
        <Actionsheet isOpen={showActionsheet} onClose={handleClose} zIndex={999}>
            <ActionsheetBackdrop />
            <ActionsheetContent h='$72' zIndex={999} >
                <ActionsheetDragIndicatorWrapper>
                    <ActionsheetDragIndicator />
                </ActionsheetDragIndicatorWrapper>
                <Input>
                    <InputField onChange={(e) => onValue(e.nativeEvent.text)} placeholder={placeholder} />
                </Input>
                <Pressable onPress={handleClose}>
                    <ButtonText>Button</ButtonText>
                </Pressable>
            </ActionsheetContent>
        </Actionsheet>
    </Box>
}