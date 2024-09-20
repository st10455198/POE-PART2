import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const AndroidLarge8 = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.androidLarge13}
      locations={[0, 1]}
      colors={["#b138af", "#dcc9c9"]}
    >
      <Image
        style={styles.download191}
        contentFit="cover"
        source={require("../assets/download-19-1.png")}
      />
      <Text style={[styles.thankYouFor, styles.menuListTypo]}>
        Thank you for Odering,your request will be Accepted shortly
      </Text>
      <Pressable
        style={styles.androidLarge13Child}
        onPress={() => navigation.navigate("AndroidLarge4")}
      />
      <Text style={[styles.menuList, styles.menuListTypo]}>Menu List</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  menuListTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    left: "50%",
    position: "absolute",
  },
  download191: {
    top: 120,
    left: 40,
    width: 258,
    height: 195,
    position: "absolute",
  },
  thankYouFor: {
    marginLeft: -180,
    top: 414,
    fontSize: FontSize.size_21xl,
    color: Color.colorBlack,
    width: 360,
    height: 204,
  },
  androidLarge13Child: {
    top: 618,
    left: 95,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhitesmoke,
    width: 148,
    height: 46,
    position: "absolute",
  },
  menuList: {
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
  androidLarge13: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
});

export default AndroidLarge8;
