import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const AndroidLarge1 = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.androidLarge4}
      locations={[0, 1]}
      colors={["#b138af", "#dcc9c9"]}
    >
      <Text
        style={[styles.buffaloWingsR150, styles.buffaloTypo]}
      >{`Buffalo wings
[R150]`}</Text>
      <Pressable
        style={styles.androidLarge4Child}
        onPress={() => navigation.navigate("AndroidLarge4")}
      />
      <Text style={[styles.backToMenu, styles.buffaloTypo]}>Back to menu</Text>
      <Image
        style={styles.download171}
        contentFit="cover"
        source={require("../assets/download-17-12.png")}
      />
      <Image
        style={[styles.starIcon, styles.textPosition]}
        contentFit="cover"
        source={require("../assets/star.png")}
      />
      <Text style={[styles.text, styles.textPosition]}>4.8</Text>
      <Text style={[styles.buffaloWingsDeepFriedUnbr, styles.buffaloTypo]}>
        Buffalo wings, deep-fried unbreaded Buffalo wings or drumsticks coated
        with a vinegar-and-cayenne-pepper hot sauce mixed with butter. 
      </Text>
      <Pressable
        style={[styles.androidLarge4Item, styles.shoppingCartIconPosition]}
        onPress={() => navigation.navigate("AndroidLarge5")}
      />
      <Text style={[styles.addCart, styles.buffaloTypo]}>Add cart</Text>
      <Image
        style={[styles.shoppingCartIcon, styles.shoppingCartIconPosition]}
        contentFit="cover"
        source={require("../assets/shopping-cart.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  buffaloTypo: {
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
  buffaloWingsR150: {
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
  androidLarge4Child: {
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
  download171: {
    top: 25,
    left: 21,
    width: 240,
    height: 180,
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
  buffaloWingsDeepFriedUnbr: {
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
  androidLarge4Item: {
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
  androidLarge4: {
    flex: 1,
    width: "100%",
    height: 800,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default AndroidLarge1;
