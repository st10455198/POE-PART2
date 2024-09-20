import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const AndroidLarge5 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge3}>
      <Text style={[styles.cart, styles.cartLayout]}> cart</Text>
      <Image
        style={styles.androidLarge3Child}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <View style={[styles.androidLarge3Item, styles.cartLayout]} />
      <Text style={[styles.search, styles.textTypo]}>search</Text>
      <Image
        style={styles.download171}
        contentFit="cover"
        source={require("../assets/download-17-11.png")}
      />
      <Text style={[styles.buffaloWings, styles.cartTypo]}>Buffalo wings,</Text>
      <Text style={[styles.text, styles.textTypo]}>2</Text>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={styles.minusSignIcon}
        contentFit="cover"
        source={require("../assets/minus-sign.png")}
      />
      <Pressable
        style={[styles.androidLarge3Inner, styles.androidLarge3InnerLayout]}
        onPress={() => navigation.navigate("AndroidLarge8")}
      />
      <Text style={[styles.checkout, styles.cartTypo]}>checkout</Text>
      <Pressable
        style={[styles.rectanglePressable, styles.androidLarge3InnerLayout]}
        onPress={() => navigation.navigate("AndroidLarge4")}
      />
      <Text style={[styles.backToMenu, styles.cartTypo]}>back to menu</Text>
      <Text style={[styles.total, styles.textTypo]}>Total:</Text>
      <Text style={[styles.r300, styles.textTypo]}>R300</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cartLayout: {
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
  cartTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  androidLarge3InnerLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  cart: {
    left: 9,
    width: 341,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    color: Color.colorBlack,
    fontSize: FontSize.size_17xl,
    top: 18,
  },
  androidLarge3Child: {
    left: 300,
    width: 50,
    height: 51,
    top: 18,
    position: "absolute",
  },
  androidLarge3Item: {
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
    top: 168,
    left: 0,
    width: 155,
    height: 92,
    position: "absolute",
  },
  buffaloWings: {
    top: 341,
    left: 22,
    width: 278,
    height: 59,
    color: Color.colorBlack,
    fontSize: FontSize.size_17xl,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  text: {
    top: 203,
    left: 287,
    width: 81,
    height: 35,
  },
  vectorIcon: {
    height: "4.5%",
    width: "6.67%",
    top: "24.25%",
    right: "3.06%",
    bottom: "71.25%",
    left: "90.28%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  minusSignIcon: {
    top: 194,
    left: 229,
    width: 46,
    height: 41,
    position: "absolute",
  },
  androidLarge3Inner: {
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
    top: 495,
    left: 20,
    width: 113,
    height: 43,
  },
  r300: {
    top: 498,
    left: 209,
    width: 101,
    height: 24,
  },
  androidLarge3: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge5;
