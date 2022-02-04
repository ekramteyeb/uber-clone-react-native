import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { Camera } from "expo-camera";
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
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";
import { AutoFocus } from "expo-camera/build/Camera.types";

const data = [
  {
    title: "CAKES",
    data: ["GULASHO", "RISITTO", "BLACK FORST", "TEKORACH"],
    uri: "https://www.seriouseats.com/thmb/p1UTiC0PEeji0tXB-xvxcYc5j_A=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__11__BakedOccasions_BirthdayCake-02af7038d93647d9a7339f0802b03079.jpg",
  },
  {
    title: "SOFT DRINKS",
    data: ["COCA", "PEPSI", "FANTA", "SPRIT"],
    uri: "https://fulloption.com.ng/wp-content/uploads/2017/08/365.jpg",
  },
  {
    title: "HOT DRINKS",
    data: ["TEA", "COFFEE", "MACHIATO"],
    uri: "https://fulloption.com.ng/wp-content/uploads/2017/08/365.jpg",
  },
];
const Item = ({ title, check }) => (
  <TouchableOpacity>
    <View style={[styles.item, tw`bg-gray-200  p-6 mb-5 ml-auto mr-auto `]}>
      <Text style={styles.title}>{title}</Text>
      <Image
        style={tw`w-80 h-60`}
        source={{
          uri: check
            ? `https://static.matsmart.fi/sites/default/files/styles/product/public/product-images/ms201447-fan_exotic_330mlpng.png?itok=H3kQO_MY`
            : "https://www.seriouseats.com/thmb/p1UTiC0PEeji0tXB-xvxcYc5j_A=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__11__BakedOccasions_BirthdayCake-02af7038d93647d9a7339f0802b03079.jpg",
        }}
      />
    </View>
  </TouchableOpacity>
);
const WhatsupScreen = () => {
  return (
    <SafeAreaView style={[styles.container, tw`bg-white h-full `]}>
      <View style={tw` p-6 pb-0 bg-green-700 `}>
        <Text style={tw`text-white text-2xl pt-3 `}>WhatsApp</Text>

        <View style={tw`flex flex-row pb-1 mb-0 pt-4`}>
          <TouchableOpacity style={tw` flex-1`}>
            <View>
              <Icon
                style={tw` w-10 mt-1`}
                name="camera"
                color="white"
                type="antdesign"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={tw` flex-1`}>
            <View>
              <Text style={tw`text-white text-xl`}>chats</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={tw` flex-1`}>
            <View>
              <Text style={tw`text-white text-xl`}>status</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert("call 911")}>
            <View>
              <Text style={tw`text-white text-xl`}>calls</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <SectionList
        style={tw``}
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item, check }) => (
          <Item title={item} check={item.length % 2 == 0} />
        )}
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
    // affect the safeArea padding and height
    /* paddingTop: StatusBar.currentHeight,
    marginHorizontal: 6, */
  },
  camera: {
    width: 330,
    height: 300,
    margin: 20,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
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

export default WhatsupScreen;
