import { Button, ButtonText, Card, Input, InputField, Text, VStack } from "@gluestack-ui/themed"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { usePathname, useRouter } from "expo-router";
import { Box } from "lucide-react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SetUrl() {
    const pathName = usePathname()
    const router = useRouter()
    const [textUrl, settextUrl] = useState("")

    const onSave = () => {
        AsyncStorage.setItem('url', textUrl)
        router.push('/')
    }

    return <SafeAreaView style={{ flex: 1, width: '100%' }}  >
        <VStack flex={1} justifyContent="center" alignContent="center" alignItems="center">
            <Card m={"$3"} w={"$80"}>
                <VStack gap={"$4"}>
                    <Text fontSize={"$4xl"}>Input Url</Text>
                    <Input w={"$full"}>
                        <InputField onChange={(e) => settextUrl(e.nativeEvent.text)} placeholder="Input Url" />
                    </Input>
                    <Button onPress={onSave}>
                        <ButtonText>Button</ButtonText>
                    </Button>
                </VStack>
            </Card>

        </VStack>
    </SafeAreaView>

}
