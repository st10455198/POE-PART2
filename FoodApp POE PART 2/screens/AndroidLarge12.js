import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const AndroidLarge12 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge6}>
      <Text style={[styles.mainDishCart, styles.mainDishCartLayout]}>
        {" "}
        Main dish Cart
      </Text>
      <Image
        style={styles.androidLarge6Child}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <View style={[styles.androidLarge6Item, styles.mainDishCartLayout]} />
      <Text style={[styles.search, styles.textTypo]}>search</Text>
      <Image
        style={styles.androidLarge6Inner}
        contentFit="cover"
        source={require("../assets/rectangle-4.png")}
      />
      <Image
        style={styles.download152}
        contentFit="cover"
        source={require("../assets/download-15-2.png")}
      />
      <Text
        style={[styles.chickenTikkaMasala, styles.checkoutTypo]}
      >{`Chicken tikka masala
[R320]`}</Text>
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
      <View style={[styles.rectangleView, styles.checkoutPosition]} />
      <Text style={[styles.checkout, styles.checkoutPosition]}>checkout</Text>
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("AndroidLarge4")}
      />
      <Text style={[styles.backToMenu, styles.checkoutTypo]}>back to menu</Text>
      <Text style={[styles.total, styles.totalTypo]}>Total:</Text>
      <Text style={[styles.r64000, styles.totalTypo]}>R640.00</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainDishCartLayout: {
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
  checkoutTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  checkoutPosition: {
    top: 641,
    position: "absolute",
  },
  totalTypo: {
    top: 513,
    height: 39,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  mainDishCart: {
    width: 341,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    color: Color.colorBlack,
    fontSize: FontSize.size_17xl,
    left: 9,
    top: 18,
  },
  androidLarge6Child: {
    left: 300,
    width: 50,
    height: 51,
    top: 18,
    position: "absolute",
  },
  androidLarge6Item: {
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
  androidLarge6Inner: {
    top: 131,
    left: 10,
    width: 80,
    height: 80,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  download152: {
    top: 130,
    left: -22,
    width: 131,
    height: 100,
    position: "absolute",
  },
  chickenTikkaMasala: {
    top: 310,
    fontSize: 32,
    width: 374,
    height: 90,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    left: 9,
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
  rectangleView: {
    backgroundColor: Color.colorPurple,
    width: 197,
    height: 42,
    borderRadius: Border.br_xl,
    left: 75,
  },
  checkout: {
    left: 90,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    color: Color.colorBlack,
    fontSize: FontSize.size_17xl,
  },
  rectanglePressable: {
    top: 715,
    left: 84,
    backgroundColor: Color.colorRed,
    width: 188,
    height: 39,
    borderRadius: Border.br_xl,
    position: "absolute",
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
    left: 24,
    width: 85,
  },
  r64000: {
    left: 208,
    width: 120,
  },
  androidLarge6: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge12;
