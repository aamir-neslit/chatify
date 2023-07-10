import * as Fonts from 'expo-font';
const loadFonts = async () => {
    const [fontsLoaded] = Fonts.useFonts({
      "Ananda-Black": require("../assets/fonts/AnandaBlack.ttf"),
      "Montserrat-Reg": require("../assets/fonts/Montserrat-Regular.ttf"),
      "Montserrat-Med": require("../assets/fonts/Montserrat-Medium.ttf"),
      "Montserrat-SemiBold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
      "Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
    });
  };

export {loadFonts};