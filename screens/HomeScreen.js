import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";

export default function HomeScreen() {
  return (
    <SafeAreaView style={tw`h-full pb-20`}>
      <View style={tw`p-5 pt-0`}>
        <Image
          style={{
            width: 100,
            height: 90,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "lightblue",
  },
});
