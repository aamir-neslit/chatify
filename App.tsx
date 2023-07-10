import { useCallback } from "react";
import { RootNavigator } from "@navigation";
import * as Fonts from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = Fonts.useFonts({
    "Ananda-Black": require("./src/assets/fonts/AnandaBlack.ttf"),
    "Montserrat-Reg": require("./src/assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Med": require("./src/assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-SemiBold": require("./src/assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-Bold": require("./src/assets/fonts/Montserrat-Bold.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  onLayoutRootView();
  if (!fontsLoaded) {
    return null;
  }
  return <RootNavigator />;
}
