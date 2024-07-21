import { Iframe } from "@bounceapp/iframe"
import { SafeAreaView } from "react-native-safe-area-context"

export default function App() {
  const url = "https://next-sus.ravenstone.cloud"
  return <SafeAreaView style={{ flex: 1 }}>
    <Iframe uri={url} style={{ flex: 1 }} />
  </SafeAreaView>
}