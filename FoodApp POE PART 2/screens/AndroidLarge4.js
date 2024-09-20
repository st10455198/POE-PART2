import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const AndroidLarge4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge2}>
      <Text style={[styles.menuList, styles.menuListLayout]}>{`Menu List
`}</Text>
      <Image
        style={styles.androidLarge2Child}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <View style={[styles.androidLarge2Item, styles.menuListLayout]} />
      <Text style={[styles.search, styles.menuTypo]}>search</Text>
      <Image
        style={styles.download161}
        contentFit="cover"
        source={require("../assets/download-16-1.png")}
      />
      <Image
        style={styles.download172}
        contentFit="cover"
        source={require("../assets/download-17-2.png")}
      />
      <Pressable
        style={[styles.androidLarge2Inner, styles.androidBg]}
        onPress={() => navigation.navigate("AndroidLarge1")}
      />
      <Text style={[styles.startersMenu, styles.menuTypo]}>Starters menu</Text>
      <Pressable
        style={[styles.rectanglePressable, styles.rectanglePressablePosition]}
        onPress={() => navigation.navigate("AndroidLarge3")}
      />
      <Pressable
        style={styles.mainDishMenuContainer}
        onPress={() => navigation.navigate("AndroidLarge3")}
      >
        <Text style={styles.menuTypo}>Main dish menu</Text>
      </Pressable>
      <Pressable
        style={[styles.androidLarge2Child1, styles.rectanglePressablePosition]}
        onPress={() => navigation.navigate("AndroidLarge2")}
      />
      <Text style={[styles.dessertMenu, styles.menuTypo1]}>Dessert menu</Text>
      <Image
        style={styles.download151}
        contentFit="cover"
        source={require("../assets/download-15-2.png")}
      />
      <View style={styles.rectangleView} />
      <Pressable
        style={[styles.androidLarge2Child2, styles.androidChildLayout]}
        onPress={() => navigation.navigate("AndroidLarge6")}
      />
      <Pressable
        style={[styles.androidLarge2Child3, styles.startersmainPosition]}
        onPress={() => navigation.navigate("AndroidLarge7")}
      />
      <Text
        style={[styles.startersmain, styles.startersmainPosition]}
      >{`starters&Main`}</Text>
      <Pressable
        style={[styles.androidLarge2Child4, styles.androidBg]}
        onPress={() => navigation.navigate("AndroidLarge10")}
      />
      <View
        style={[styles.androidLarge2Child5, styles.dessertstartersPosition]}
      />
      <Text style={[styles.addAllItems, styles.addAllItemsTypo]}>
        Add All Items
      </Text>
      <Text
        style={[styles.maindessert, styles.addAllItemsTypo]}
      >{`Main&Dessert`}</Text>
      <Pressable
        style={[styles.dessertstarters, styles.dessertstartersPosition]}
        onPress={() => navigation.navigate("AndroidLarge9")}
      >
        <Text
          style={[styles.dessertstarters1, styles.menuTypo1]}
        >{`Dessert&Starters`}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  menuListLayout: {
    height: 46,
    position: "absolute",
  },
  menuTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  androidBg: {
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  rectanglePressablePosition: {
    left: 143,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  menuTypo1: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  androidChildLayout: {
    width: 402,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_xl,
  },
  startersmainPosition: {
    top: 624,
    position: "absolute",
  },
  dessertstartersPosition: {
    top: 503,
    position: "absolute",
  },
  addAllItemsTypo: {
    left: 63,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_17xl,
    position: "absolute",
  },
  menuList: {
    left: 9,
    width: 341,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_17xl,
    top: 18,
  },
  androidLarge2Child: {
    left: 300,
    width: 50,
    height: 51,
    top: 18,
    position: "absolute",
  },
  androidLarge2Item: {
    marginLeft: -165,
    top: 69,
    left: "50%",
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorWhitesmoke,
    width: 310,
  },
  search: {
    top: 83,
    left: 75,
    width: 115,
    height: 18,
    position: "absolute",
  },
  download161: {
    top: 366,
    width: 105,
    height: 86,
    borderRadius: Border.br_xl,
    left: 2,
    position: "absolute",
  },
  download172: {
    top: 134,
    left: 0,
    width: 107,
    height: 80,
    position: "absolute",
  },
  androidLarge2Inner: {
    top: 152,
    width: 163,
    height: 37,
    left: 146,
  },
  startersMenu: {
    top: 155,
    left: 158,
    position: "absolute",
  },
  rectanglePressable: {
    top: 242,
    width: 173,
    height: 34,
  },
  mainDishMenuContainer: {
    left: 153,
    top: 247,
    position: "absolute",
  },
  androidLarge2Child1: {
    top: 373,
    width: 174,
    height: 48,
  },
  dessertMenu: {
    top: 381,
    fontSize: FontSize.size_5xl,
    left: 146,
    position: "absolute",
  },
  download151: {
    top: 233,
    width: 131,
    height: 100,
    left: -15,
    position: "absolute",
  },
  rectangleView: {
    top: 466,
    borderRadius: 30,
    backgroundColor: Color.colorPurple,
    width: 358,
    height: 316,
    left: 2,
    position: "absolute",
  },
  androidLarge2Child2: {
    top: 696,
    left: -19,
    height: 61,
    position: "absolute",
  },
  androidLarge2Child3: {
    height: 44,
    width: 402,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_xl,
    left: -15,
  },
  startersmain: {
    left: 42,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_17xl,
  },
  androidLarge2Child4: {
    top: 564,
    left: -34,
    width: 421,
    height: 41,
  },
  androidLarge2Child5: {
    height: 43,
    width: 402,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_xl,
    left: -15,
  },
  addAllItems: {
    top: 705,
  },
  maindessert: {
    top: 560,
  },
  dessertstarters1: {
    fontSize: FontSize.size_17xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  dessertstarters: {
    left: 42,
  },
  androidLarge2: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge4;
