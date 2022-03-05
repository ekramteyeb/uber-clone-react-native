import React from "react";
import tw from "tailwind-react-native-classnames";
import { Text, View, StyleSheet } from "react-native";
const MapScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Text style={styles.text}>Map screen </Text>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
