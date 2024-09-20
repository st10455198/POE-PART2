import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const AndroidLarge = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.androidLarge1}
      locations={[0, 1]}
      colors={["#b138af", "#dcc9c9"]}
    >
      <Image
        style={styles.download13Icon}
        contentFit="cover"
        source={require("../assets/download-13.png")}
      />
      <Image
        style={styles.download13Icon}
        contentFit="cover"
        source={require("../assets/download-13.png")}
      />
      <Text style={[styles.enjoyYourFood, styles.getStartedTypo]}>
        Enjoy Your Food
      </Text>
      <Pressable
        style={styles.androidLarge1Child}
        onPress={() => navigation.navigate("AndroidLarge4")}
      />
      <Text style={[styles.getStarted, styles.getStartedTypo]}>
        Get Started
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  getStartedTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    left: "50%",
    position: "absolute",
  },
  download13Icon: {
    marginLeft: -124,
    top: 139,
    width: 248,
    height: 229,
    left: "50%",
    position: "absolute",
  },
  enjoyYourFood: {
    marginLeft: -105,
    top: 442,
    fontSize: FontSize.size_21xl,
    color: Color.colorBlack,
    width: 235,
    height: 81,
  },
  androidLarge1Child: {
    top: 618,
    left: 95,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhitesmoke,
    width: 148,
    height: 46,
    position: "absolute",
  },
  getStarted: {
    marginLeft: -54,
    top: 633,
    fontSize: FontSize.size_mini,
    color: Color.colorMediumorchid,
    width: 107,
    height: 19,
    transform: [
      {
        rotate: "-0.1deg",
      },
    ],
  },
  androidLarge1: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
});

export default AndroidLarge;
