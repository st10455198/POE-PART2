import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const AndroidLarge7 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge12}>
      <Text
        style={[styles.startermain, styles.startermainLayout]}
      >{`Starter&Main`}</Text>
      <Image
        style={styles.androidLarge12Child}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <View style={[styles.androidLarge12Item, styles.startermainLayout]} />
      <Text style={[styles.search, styles.textTypo]}>search</Text>
      <Image
        style={[styles.download171, styles.downloadLayout]}
        contentFit="cover"
        source={require("../assets/download-17-1.png")}
      />
      <Text style={[styles.buffaloWings150, styles.textTypo]}>
        Buffalo wings[150]
      </Text>
      <Text style={[styles.text, styles.textTypo]}>1</Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.minusSignIcon, styles.minusIconLayout]}
        contentFit="cover"
        source={require("../assets/minus-sign.png")}
      />
      <Image
        style={[styles.minusSignIcon1, styles.minusIconLayout]}
        contentFit="cover"
        source={require("../assets/minus-sign.png")}
      />
      <Pressable
        style={[styles.androidLarge12Inner, styles.rectanglePressableLayout]}
        onPress={() => navigation.navigate("AndroidLarge8")}
      />
      <Text style={[styles.checkout, styles.checkoutTypo]}>checkout</Text>
      <Pressable
        style={[styles.rectanglePressable, styles.rectanglePressableLayout]}
        onPress={() => navigation.navigate("AndroidLarge4")}
      />
      <Text style={[styles.backToMenu, styles.checkoutTypo]}>back to menu</Text>
      <Text style={[styles.total, styles.textTypo]}>Total:</Text>
      <Text style={[styles.r460, styles.textTypo]}>R460</Text>
      <Image
        style={[styles.download153, styles.downloadLayout]}
        contentFit="cover"
        source={require("../assets/download-15-2.png")}
      />
      <Text
        style={[styles.chickenTikkaMasala, styles.textTypo]}
      >{`Chicken tikka masala
[R320]`}</Text>
      <Text style={[styles.text1, styles.textTypo]}>1</Text>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  startermainLayout: {
    height: 46,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  downloadLayout: {
    height: 100,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    width: "6.67%",
    height: "4.5%",
    position: "absolute",
    overflow: "hidden",
  },
  minusIconLayout: {
    height: 41,
    width: 46,
    position: "absolute",
  },
  rectanglePressableLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  checkoutTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  startermain: {
    left: 9,
    width: 341,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    color: Color.colorBlack,
    fontSize: FontSize.size_17xl,
    top: 18,
  },
  androidLarge12Child: {
    left: 300,
    width: 50,
    height: 51,
    top: 18,
    position: "absolute",
  },
  androidLarge12Item: {
    marginLeft: -165,
    top: 76,
    left: "50%",
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorWhitesmoke,
    width: 310,
  },
  search: {
    top: 83,
    width: 115,
    height: 18,
    left: 75,
  },
  download171: {
    top: 161,
    left: 0,
    width: 134,
  },
  buffaloWings150: {
    top: 141,
    left: 138,
    width: 210,
    height: 53,
  },
  text: {
    top: 203,
    left: 287,
    width: 81,
    height: 35,
  },
  vectorIcon: {
    top: "24.25%",
    right: "3.06%",
    bottom: "71.25%",
    left: "90.28%",
  },
  minusSignIcon: {
    top: 194,
    left: 229,
  },
  minusSignIcon1: {
    top: 316,
    left: 237,
  },
  androidLarge12Inner: {
    backgroundColor: Color.colorPurple,
    width: 197,
    height: 42,
    top: 641,
    left: 75,
  },
  checkout: {
    left: 90,
    top: 641,
    color: Color.colorBlack,
    fontSize: FontSize.size_17xl,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  rectanglePressable: {
    top: 715,
    left: 84,
    backgroundColor: Color.colorRed,
    width: 188,
    height: 39,
  },
  backToMenu: {
    top: 720,
    left: 100,
    fontSize: FontSize.size_5xl,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  total: {
    top: 577,
    left: 20,
    width: 113,
    height: 43,
  },
  r460: {
    top: 580,
    left: 249,
    width: 101,
    height: 24,
  },
  download153: {
    top: 289,
    left: 3,
    width: 131,
  },
  chickenTikkaMasala: {
    top: 279,
    left: 141,
    width: 250,
    height: 60,
  },
  text1: {
    top: 324,
    left: 303,
  },
  vectorIcon1: {
    top: "40.13%",
    right: "0%",
    bottom: "55.38%",
    left: "93.33%",
  },
  androidLarge12: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge7;
