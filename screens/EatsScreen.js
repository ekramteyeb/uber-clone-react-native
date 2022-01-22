import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  Image,
  StatusBar,
  SectionList,
  StyleSheet,
} from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const data = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"],
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"],
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"],
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"],
  },
];
const Item = ({ title }) => (
  <TouchableOpacity onPress={(e) => alert("you presed me")}>
    <View style={[styles.item, tw`bg-gray-200`]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </TouchableOpacity>
);
const EatsScreen = () => {
  return (
    <SafeAreaView style={[styles.container, tw`bg-white h-full `]}>
      <SectionList
        style={tw`pt-2`}
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={[styles.header, tw`bg-red-200 `]}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 6,
  },
  item: {
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#ffff",
    paddingLeft: 12,
  },
  title: {
    fontSize: 24,
  },
});

export default EatsScreen;
