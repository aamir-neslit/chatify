import React from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Screen,
  moderateScale,
  verticalScale,
  horizontalScale,
  COLORS,
} from "@constants";

const SplashScreen = () => {
  const navigation = useNavigation();
  return (
    <Screen starter>
      <Image
        source={require("../assets/png/chat-logo-splash.png")}
        style={styles.logo}
      />
      <View style={styles.welcomeTextContainer}>
        <Text style={[styles.welcomeText, styles.subTitle]}>Welcome to</Text>
        <Text style={[styles.welcomeText, styles.title]}>Chatify</Text>
        <Text style={[styles.welcomeText, styles.subTitle]}>
          Chatting Revolutionized
        </Text>
      </View>
      <View style={styles.ctaContainer}>
        <TouchableOpacity
          style={styles.cta}
          onPress={() => {
            navigation.navigate("Login");
          }}>
          <Text style={styles.ctaText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    marginVertical: verticalScale(10),
  },
  welcomeTextContainer: {
    alignItems: "center",
  },
  welcomeText: {
    color: "#FFFFFF",
    marginVertical: verticalScale(15),
  },
  title: {
    textTransform: "uppercase",
    fontFamily: "Montserrat-Bold",
    fontSize: moderateScale(40),
  },
  subTitle: {
    fontFamily: "Ananda-Black",
    lineHeight: verticalScale(40),
    fontSize: moderateScale(30),
  },
  ctaContainer: {
    marginVertical: verticalScale(45),
    alignItems: "center",
  },
  cta: {
    backgroundColor: "#FFFFFF",
    width: horizontalScale(280),
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(25),
    borderRadius: moderateScale(15),
  },
  ctaText: {
    color: COLORS.PRIMARY,
    textAlign: "center",
    fontFamily: "Montserrat-Bold",
    fontSize: moderateScale(25),
  },
});

export { SplashScreen };
