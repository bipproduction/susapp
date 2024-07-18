import { Iframe } from "@bounceapp/iframe";
import { AddIcon, Button, ButtonIcon, Center, HStack, SafeAreaView, Spinner, Text, VStack } from "@gluestack-ui/themed";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { ArrowBigLeft, ArrowBigLeftDashIcon, ArrowBigRight, ArrowLeftCircle, ChevronLeftCircle } from "lucide-react-native";
import { useState, useEffect } from "react";
import { Pressable } from "react-native";

export default function Home() {
    const router = useRouter()
    const [defaultApp, setDefaultApp] = useState<string | null>(null)
    const [ready, setready] = useState(false)

    useEffect(() => {
        AsyncStorage.getItem('defaultApp').then((value) => {
            if (value) {
                setDefaultApp(value)
            }
        })
    }, [defaultApp])


    return <SafeAreaView style={{ flex: 1, width: '100%' }} >
        <VStack flex={1}>
            <HStack bg="$blueGray100" p={"$2"} gap={"$2"}>
                <Pressable onPress={() => router.push('/')} >
                    <ButtonIcon as={ChevronLeftCircle} size="xl" />
                </Pressable>
                {!ready && <Spinner size="small" />}
            </HStack>
            {!defaultApp ? <Spinner size="small" /> : <Iframe uri={defaultApp} style={{ flex: 1 }} onLoadEnd={() => setready(true)} />}
        </VStack>
    </SafeAreaView>
}