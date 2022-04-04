import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
const CategoryMealScreen = (props) => {
  return (
    <>
      <View style={styles.screen}>
        <Text>Hi from Category Meal Screen</Text>
        <Button
          title="DETAILS"
          onPress={() => {
            props.navigation.navigate({ routeName: "MealDetail" });
          }}
        ></Button>
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
