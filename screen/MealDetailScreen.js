import React from "react";
import { Text, View, StyleSheet } from "react-native";
const MealDetailScreen = () => {
  return (
    <>
      <View style={styles.screen}>
        <Text>Hi from MealDetailScreen</Text>
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

export default MealDetailScreen;
