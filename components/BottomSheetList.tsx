import { Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicator, ActionsheetDragIndicatorWrapper, ActionsheetItem, ActionsheetItemText, Box, Button, ButtonText, Pressable } from "@gluestack-ui/themed";
import React from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";

export function BottomSheetList({ buttonStyle, textStyle, label, listData, onValue }: { textStyle?: StyleProp<TextStyle>, buttonStyle?: StyleProp<ViewStyle>, label: string, listData?: any[], onValue: (value: any) => void }) {
    const [showActionsheet, setShowActionsheet] = React.useState(false);
    const handleClose = () => setShowActionsheet(!showActionsheet);

    const handlePress = (value: any) => {
        onValue(value)
        handleClose()
    }
    return (
        <Box>
            <Pressable style={buttonStyle} onPress={handleClose}>
                <ButtonText style={textStyle} >{label}</ButtonText>
            </Pressable>
            <Actionsheet isOpen={showActionsheet} onClose={handleClose} zIndex={999}>
                <ActionsheetBackdrop />
                <ActionsheetContent h='$72' zIndex={999} >
                    <ActionsheetDragIndicatorWrapper>
                        <ActionsheetDragIndicator />
                    </ActionsheetDragIndicatorWrapper>
                    {listData?.map((item: any, index: number) => (
                        <ActionsheetItem key={index} onPress={() => handlePress(item)}>
                            <ActionsheetItemText>{item.label}</ActionsheetItemText>
                        </ActionsheetItem>
                    ))}
                </ActionsheetContent>
            </Actionsheet>
        </Box>
    );
}