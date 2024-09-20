import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const AndroidLarge6 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge9}>
      <Text style={[styles.allItemsCart, styles.allItemsCartLayout]}>
        All items cart
      </Text>
      <Image
        style={styles.androidLarge9Child}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <View style={[styles.androidLarge9Item, styles.allItemsCartLayout]} />
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
        style={styles.minusSignIcon}
        contentFit="cover"
        source={require("../assets/minus-sign.png")}
      />
      <Image
        style={[styles.minusSignIcon1, styles.minusIconPosition]}
        contentFit="cover"
        source={require("../assets/minus-sign.png")}
      />
      <Image
        style={[styles.minusSignIcon2, styles.minusIconPosition]}
        contentFit="cover"
        source={require("../assets/minus-sign.png")}
      />
      <Pressable
        style={[styles.androidLarge9Inner, styles.androidLarge9InnerLayout]}
        onPress={() => navigation.navigate("AndroidLarge8")}
      />
      <Text style={[styles.checkout, styles.checkoutTypo]}>checkout</Text>
      <Pressable
        style={[styles.rectanglePressable, styles.androidLarge9InnerLayout]}
        onPress={() => navigation.navigate("AndroidLarge4")}
      />
      <Text style={[styles.backToMenu, styles.backToMenuTypo]}>
        back to menu
      </Text>
      <Text style={[styles.total, styles.totalPosition]}>Total:</Text>
      <Text style={[styles.r580, styles.textTypo]}>R580</Text>
      <Image
        style={[styles.download153, styles.downloadLayout]}
        contentFit="cover"
        source={require("../assets/download-15-2.png")}
      />
      <Image
        style={[styles.download183, styles.totalPosition]}
        contentFit="cover"
        source={require("../assets/download-18-3.png")}
      />
      <Text
        style={[styles.chickenTikkaMasala, styles.textTypo]}
      >{`Chicken tikka masala
[R320]`}</Text>
      <Text style={[styles.text1, styles.textTypo]}>1</Text>
      <Text style={[styles.redVelvetr110, styles.backToMenuTypo]}>
        Red velvet[R110]
      </Text>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Text style={[styles.text2, styles.textTypo]}>1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  allItemsCartLayout: {
    height: 46,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
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
  minusIconPosition: {
    left: 237,
    height: 41,
    width: 46,
    position: "absolute",
  },
  androidLarge9InnerLayout: {
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
  totalPosition: {
    left: 20,
    position: "absolute",
  },
  allItemsCart: {
    left: 9,
    width: 341,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_17xl,
    color: Color.colorBlack,
    top: 18,
  },
  androidLarge9Child: {
    left: 300,
    width: 50,
    height: 51,
    top: 18,
    position: "absolute",
  },
  androidLarge9Item: {
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
    position: "absolute",
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
    position: "absolute",
  },
  text: {
    top: 203,
    left: 287,
    width: 81,
    height: 35,
    position: "absolute",
  },
  vectorIcon: {
    top: "24.25%",
    bottom: "71.25%",
    left: "90.28%",
    right: "3.06%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "6.67%",
    height: "4.5%",
  },
  minusSignIcon: {
    top: 194,
    left: 229,
    height: 41,
    width: 46,
    position: "absolute",
  },
  minusSignIcon1: {
    top: 316,
  },
  minusSignIcon2: {
    top: 469,
  },
  androidLarge9Inner: {
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
    width: 113,
    height: 43,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  r580: {
    top: 580,
    left: 249,
    width: 101,
    height: 24,
    position: "absolute",
  },
  download153: {
    top: 289,
    left: 3,
    width: 131,
  },
  download183: {
    top: 420,
    width: 114,
    height: 128,
  },
  chickenTikkaMasala: {
    top: 279,
    left: 141,
    width: 250,
    height: 60,
    position: "absolute",
  },
  text1: {
    top: 324,
    left: 303,
    position: "absolute",
  },
  redVelvetr110: {
    top: 406,
    left: 140,
    width: 278,
    height: 59,
    color: Color.colorBlack,
    fontSize: FontSize.size_5xl,
  },
  vectorIcon1: {
    top: "40.13%",
    right: "0%",
    bottom: "55.38%",
    left: "93.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "6.67%",
    height: "4.5%",
  },
  vectorIcon2: {
    top: "59%",
    bottom: "36.5%",
    left: "90.28%",
    right: "3.06%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "6.67%",
    height: "4.5%",
  },
  text2: {
    top: 484,
    left: 296,
    position: "absolute",
  },
  androidLarge9: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge6;
