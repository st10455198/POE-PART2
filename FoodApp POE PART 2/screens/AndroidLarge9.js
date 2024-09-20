import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const AndroidLarge9 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge11}>
      <Text
        style={[styles.starterdessert, styles.starterdessertLayout]}
      >{` starter&Dessert`}</Text>
      <Image
        style={styles.androidLarge11Child}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <View style={[styles.androidLarge11Item, styles.starterdessertLayout]} />
      <Text style={[styles.search, styles.textTypo]}>search</Text>
      <Image
        style={styles.download171}
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
        style={[styles.androidLarge11Inner, styles.rectanglePressableLayout]}
        onPress={() => navigation.navigate("AndroidLarge8")}
      />
      <Text style={[styles.checkout, styles.checkoutTypo]}>checkout</Text>
      <Pressable
        style={[styles.rectanglePressable, styles.rectanglePressableLayout]}
        onPress={() => navigation.navigate("AndroidLarge4")}
      />
      <Text style={[styles.backToMenu, styles.backToMenuTypo]}>
        back to menu
      </Text>
      <Text style={[styles.total, styles.textTypo]}>Total:</Text>
      <Text style={[styles.r260, styles.textTypo]}>R260</Text>
      <Image
        style={styles.download183}
        contentFit="cover"
        source={require("../assets/download-18-3.png")}
      />
      <Text style={[styles.redVelvetr110, styles.backToMenuTypo]}>
        Red velvet[R110]
      </Text>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Text style={[styles.text1, styles.textTypo]}>1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  starterdessertLayout: {
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
    fontSize: FontSize.size_17xl,
    color: Color.colorBlack,
  },
  backToMenuTypo: {
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  starterdessert: {
    left: -4,
    width: 341,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_17xl,
    color: Color.colorBlack,
    top: 18,
  },
  androidLarge11Child: {
    left: 300,
    width: 50,
    height: 51,
    top: 18,
    position: "absolute",
  },
  androidLarge11Item: {
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
    height: 100,
    position: "absolute",
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
    top: 397,
    left: 237,
  },
  androidLarge11Inner: {
    backgroundColor: Color.colorPurple,
    width: 197,
    height: 42,
    top: 641,
    left: 75,
  },
  checkout: {
    left: 90,
    top: 641,
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
    color: Color.colorWhite,
  },
  total: {
    top: 577,
    left: 20,
    width: 113,
    height: 43,
  },
  r260: {
    top: 580,
    left: 249,
    width: 101,
    height: 24,
  },
  download183: {
    top: 321,
    left: 10,
    width: 114,
    height: 128,
    position: "absolute",
  },
  redVelvetr110: {
    top: 302,
    left: 127,
    width: 278,
    height: 59,
    color: Color.colorBlack,
    fontSize: FontSize.size_5xl,
  },
  vectorIcon1: {
    top: "50%",
    right: "2.22%",
    bottom: "45.5%",
    left: "91.11%",
  },
  text1: {
    top: 400,
    left: 295,
  },
  androidLarge11: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge9;
