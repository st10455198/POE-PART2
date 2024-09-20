import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const AndroidLarge3 = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.androidLarge5}
      locations={[0, 1]}
      colors={["#b138af", "#dcc9c9"]}
    >
      <Text
        style={[styles.chickenTikkaMasala, styles.chickenTypo]}
      >{`Chicken tikka masala
[R320]`}</Text>
      <Pressable
        style={[styles.androidLarge5Child, styles.download152Position]}
        onPress={() => navigation.navigate("AndroidLarge4")}
      />
      <Text style={[styles.backToMenu, styles.chickenTypo]}>Back to menu</Text>
      <Image
        style={styles.starIcon}
        contentFit="cover"
        source={require("../assets/star.png")}
      />
      <Text style={[styles.text, styles.chickenTypo]}>5</Text>
      <Text style={[styles.chickenTikkaMasala1, styles.chickenTypo]}>
        Chicken tikka masala is a dish consisting of roasted marinated chicken
        chunks (chicken tikka) in a spiced sauce. The sauce is usually creamy
        and orange-coloured.
      </Text>
      <Image
        style={[styles.download152, styles.download152Position]}
        contentFit="cover"
        source={require("../assets/download-15-2.png")}
      />
      <Pressable
        style={styles.androidLarge5Item}
        onPress={() => navigation.navigate("AndroidLarge12")}
      />
      <Image
        style={styles.shoppingCartIcon}
        contentFit="cover"
        source={require("../assets/shopping-cart.png")}
      />
      <Text style={[styles.addCart, styles.chickenTypo]}>Add cart</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  chickenTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  download152Position: {
    left: 95,
    position: "absolute",
  },
  chickenTikkaMasala: {
    marginLeft: -172,
    top: 221,
    width: 278,
    height: 95,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_5xl,
    left: "50%",
  },
  androidLarge5Child: {
    top: 618,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhitesmoke,
    width: 148,
    height: 46,
  },
  backToMenu: {
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
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    textAlign: "left",
    left: "50%",
  },
  starIcon: {
    top: 247,
    left: 243,
    width: 50,
    height: 33,
    position: "absolute",
  },
  text: {
    top: 251,
    left: 293,
    color: Color.colorWhite,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    textAlign: "left",
    fontSize: FontSize.size_5xl,
  },
  chickenTikkaMasala1: {
    top: 331,
    left: 8,
    width: 352,
    height: 201,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_5xl,
  },
  download152: {
    top: 55,
    width: 131,
    height: 100,
  },
  androidLarge5Item: {
    top: 558,
    left: -68,
    backgroundColor: Color.colorGainsboro,
    width: 473,
    height: 48,
    position: "absolute",
  },
  shoppingCartIcon: {
    top: 557,
    left: 236,
    width: 96,
    height: 96,
    position: "absolute",
    overflow: "hidden",
  },
  addCart: {
    top: 560,
    left: 112,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  androidLarge5: {
    flex: 1,
    width: "100%",
    height: 800,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default AndroidLarge3;
