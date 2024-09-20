import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const Search = () => {
  return (
    <View style={styles.search}>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  vectorIcon1: {
    height: "59.57%",
    width: "59.57%",
    top: "12.77%",
    right: "27.66%",
    bottom: "27.66%",
    left: "12.77%",
  },
  search: {
    width: 47,
    height: 47,
    overflow: "hidden",
  },
});

export default Search;
