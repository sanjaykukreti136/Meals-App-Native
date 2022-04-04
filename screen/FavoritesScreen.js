import React from "react";
import { Text, View, StyleSheet } from "react-native";
const FavoritesScreen = () => {
  return (
    <>
      <View style={styles.screen}>
        <Text>Hi from FavoritesScreen</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
