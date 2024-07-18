import {
  Button,
  ButtonText,
  Center,
  HStack,
  Input,
  InputField,
  Spinner,
  Text,
  View,
  VStack
} from "@gluestack-ui/themed";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const router = useRouter()
  const url = "https://wibu-config.ravenstone.cloud/api/get/list/sus-app"
  const [listApp, setListApp] = useState<Record<string, any>[] | null>(null)
  const [defaultApp, setDefaultApp] = useState<string | null>(null)
  const [searchValue, setSearchValue] = useState<string | null>(null)
  const [ketemu, setKetemu] = useState<boolean>(false)
  const toApp = () => {
    router.push('/home')
  }

  useEffect(() => {
    loadDataApp()
  }, [])

  async function loadDataApp() {
    let lsApp: Record<string, any>[] = []
    let localListApp = await AsyncStorage.getItem('listApp')
    if (localListApp) {
      lsApp = JSON.parse(localListApp)
    } else {
      const response = await fetch(url)
      const data = await response.json()
      lsApp = data
      await AsyncStorage.setItem('listApp', JSON.stringify(lsApp))
    }

    const defApp = await AsyncStorage.getItem('defaultApp')
    if (!defApp) {
      const dApp = lsApp.find((item) => item.default)
      await AsyncStorage.setItem('defaultApp', dApp?.url)
    }

    setDefaultApp(defApp)
    setListApp(lsApp)

  }

  useEffect(() => {
    if (searchValue) {
      const filteredData = listApp?.find((item) => item.name.toLowerCase() === searchValue.toLowerCase()) || null
      if (filteredData) {
        AsyncStorage.setItem('defaultApp', filteredData.url).then(() => {
          setDefaultApp(filteredData.url)
          setKetemu(true)
        })

      }
    }
  }, [searchValue])

  return <SafeAreaView style={{ flex: 1, width: '100%' }} >
    <VStack alignItems="center" justifyContent="center" flex={1} gap={"$4"}>
      <Center flex={1} gap={"$4"}>
        <Text>App</Text>
        {!defaultApp && <Spinner size="small" />}
        {/* {defaultApp && <Text>{defaultApp}</Text>} */}
        <Button onPress={toApp}>
          <ButtonText>To App</ButtonText>
        </Button>
      </Center>
      <View flex={1}>
        <HStack gap={"$4"}>
          <Input  >
            <InputField onChange={(e) => setSearchValue(e.nativeEvent.text)} placeholder="Search..." />
          </Input>
          {ketemu && <Button onPress={() => router.push('/home')}>
            <ButtonText>GO</ButtonText>
          </Button>}
        </HStack>
      </View>
    </VStack>
  </SafeAreaView>

}