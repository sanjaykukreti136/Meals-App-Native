import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
const CategoriesScreen = (props) => {
  return (
    <>
      <View style={styles.screen}>
        <Text>Hi from CategoriesScreen</Text>
        <Button
          title="GO TO MEALS"
          onPress={() => {
            props.navigation.navigate({ routeName: "CategoryMeal" });
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

export default CategoriesScreen;
