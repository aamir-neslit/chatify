import { RootNavigator } from "@navigation";
import { SplashScreen } from "@screens";
import { useFonts } from "expo-font";

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   "Ananda-Black": require("./src/assets/fonts/AnandaBlack.ttf"),
  //   "Montserrat-Reg": require("./src/assets/fonts/Montserrat-Regular.ttf"),
  //   "Montserrat-Med": require("./src/assets/fonts/Montserrat-Medium.ttf"),
  //   "Montserrat-SemiBold": require("./src/assets/fonts/Montserrat-SemiBold.ttf"),
  //   "Montserrat-Bold": require("./src/assets/fonts/Montserrat-Bold.ttf"),
  // });
  return <RootNavigator />;
  // return <SplashScreen />;
}
