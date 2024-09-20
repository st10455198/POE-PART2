import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const AndroidLarge10 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge10}>
      <Text
        style={[styles.maindessert, styles.maindessertLayout]}
      >{`Main&Dessert`}</Text>
      <Image
        style={styles.androidLarge10Child}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <View style={[styles.androidLarge10Item, styles.maindessertLayout]} />
      <Text style={[styles.search, styles.textTypo]}>search</Text>
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
        style={[styles.androidLarge10Inner, styles.rectanglePressableLayout]}
        onPress={() => navigation.navigate("AndroidLarge8")}
      />
      <Text style={[styles.checkout, styles.textTypo]}>checkout</Text>
      <Pressable
        style={[styles.rectanglePressable, styles.rectanglePressableLayout]}
        onPress={() => navigation.navigate("AndroidLarge4")}
      />
      <Text style={[styles.backToMenu, styles.textTypo]}>back to menu</Text>
      <Text style={[styles.total, styles.textTypo]}>Total:</Text>
      <Text style={[styles.r430, styles.textTypo]}>R430</Text>
      <Image
        style={styles.download153}
        contentFit="cover"
        source={require("../assets/download-15-2.png")}
      />
      <Image
        style={styles.download183}
        contentFit="cover"
        source={require("../assets/download-18-3.png")}
      />
      <Text
        style={[styles.chickenTikkaMasala, styles.redVelvetr110Typo]}
      >{`Chicken tikka masala
[R320]`}</Text>
      <Text style={[styles.text, styles.textTypo]}>1</Text>
      <Text style={[styles.redVelvetr110, styles.redVelvetr110Typo]}>
        Red velvet[R110]
      </Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
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
  maindessertLayout: {
    height: 46,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
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
  redVelvetr110Typo: {
    left: 140,
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
  maindessert: {
    width: 341,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    color: Color.colorBlack,
    fontSize: FontSize.size_17xl,
    left: 9,
    top: 18,
  },
  androidLarge10Child: {
    left: 300,
    width: 50,
    height: 51,
    top: 18,
    position: "absolute",
  },
  androidLarge10Item: {
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
    fontSize: FontSize.size_xl,
    left: 75,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  minusSignIcon: {
    top: 259,
    left: 242,
  },
  minusSignIcon1: {
    top: 403,
    left: 237,
  },
  androidLarge10Inner: {
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
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_17xl,
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
    fontSize: FontSize.size_5xl,
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
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  r430: {
    top: 580,
    left: 249,
    width: 101,
    height: 24,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  download153: {
    top: 179,
    left: 0,
    width: 131,
    height: 100,
    position: "absolute",
  },
  download183: {
    top: 336,
    width: 114,
    height: 128,
    left: 9,
    position: "absolute",
  },
  chickenTikkaMasala: {
    top: 178,
    width: 250,
    height: 60,
    fontSize: FontSize.size_xl,
  },
  text: {
    top: 270,
    left: 301,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  redVelvetr110: {
    top: 332,
    width: 278,
    height: 59,
    fontSize: FontSize.size_5xl,
  },
  vectorIcon: {
    top: "33%",
    right: "0%",
    bottom: "62.5%",
    left: "93.33%",
  },
  vectorIcon1: {
    top: "50.63%",
    right: "2.78%",
    bottom: "44.88%",
    left: "90.56%",
  },
  text1: {
    top: 417,
    left: 296,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  androidLarge10: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge10;
