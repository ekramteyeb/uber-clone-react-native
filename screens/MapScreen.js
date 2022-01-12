import React from "react";
import tw from "tailwind-react-native-classnames";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

const MapScreen = () => {
  return (
    <SafeAreaView style={[tw`bg-white h-full`]}>
      <View style={tw`p-20`}>
        <Text>Here is the map staffsx</Text>
      </View>
    </SafeAreaView>
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
});
