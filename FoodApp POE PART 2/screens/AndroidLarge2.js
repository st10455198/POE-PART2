import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const AndroidLarge2 = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.androidLarge7}
      locations={[0, 1]}
      colors={["#b138af", "#dcc9c9"]}
    >
      <Text style={[styles.redVelvetR110, styles.redTypo]}>{`Red velvet
[R110]`}</Text>
      <Pressable
        style={styles.androidLarge7Child}
        onPress={() => navigation.navigate("AndroidLarge4")}
      />
      <Text style={[styles.backToMenu, styles.redTypo]}>Back to menu</Text>
      <Image
        style={[styles.starIcon, styles.textPosition]}
        contentFit="cover"
        source={require("../assets/star.png")}
      />
      <Text style={[styles.text, styles.textPosition]}>4.9</Text>
      <Text style={[styles.redVelvetCake, styles.redTypo]}>
        Red velvet cake is traditionally a red, crimson, or scarlet-colored
        layer cake, layered with ermine icing.
      </Text>
      <Pressable
        style={[styles.androidLarge7Item, styles.shoppingCartIconPosition]}
        onPress={() => navigation.navigate("AndroidLarge11")}
      />
      <Text style={[styles.addCart, styles.redTypo]}>Add cart</Text>
      <Image
        style={[styles.shoppingCartIcon, styles.shoppingCartIconPosition]}
        contentFit="cover"
        source={require("../assets/shopping-cart.png")}
      />
      <Image
        style={styles.download181}
        contentFit="cover"
        source={require("../assets/download-18-1.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  redTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  textPosition: {
    top: 240,
    position: "absolute",
  },
  shoppingCartIconPosition: {
    top: 557,
    position: "absolute",
  },
  redVelvetR110: {
    marginLeft: -172,
    top: 246,
    width: 253,
    height: 70,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
    fontSize: FontSize.size_5xl,
    left: "50%",
  },
  androidLarge7Child: {
    top: 618,
    left: 95,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhitesmoke,
    width: 148,
    height: 46,
    position: "absolute",
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
    position: "absolute",
  },
  starIcon: {
    width: 50,
    height: 33,
    left: 236,
  },
  text: {
    left: 300,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_5xl,
  },
  redVelvetCake: {
    top: 331,
    left: 8,
    width: 352,
    height: 201,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
    fontSize: FontSize.size_5xl,
  },
  androidLarge7Item: {
    left: -11,
    backgroundColor: Color.colorGainsboro,
    width: 473,
    height: 48,
  },
  addCart: {
    top: 560,
    left: 112,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  shoppingCartIcon: {
    width: 96,
    height: 96,
    left: 236,
    overflow: "hidden",
  },
  download181: {
    top: 0,
    left: 0,
    width: 355,
    height: 223,
    position: "absolute",
  },
  androidLarge7: {
    flex: 1,
    width: "100%",
    height: 800,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default AndroidLarge2;
