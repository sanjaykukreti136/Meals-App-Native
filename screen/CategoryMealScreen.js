import React from "react";
import { Text, View, StyleSheet } from "react-native";
const CategoryMealScreen = () => {
  return (
    <>
      <View style={styles.screen}>
        <Text>Hi from Category Meal Screen</Text>
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

export default CategoryMealScreen;
