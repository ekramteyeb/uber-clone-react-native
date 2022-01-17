import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, TouchableOpacity, Text, View, Image } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const data = [
  {
    id: "1234",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    sreen: "MapScreen",
  },
  {
    id: "5678",
    title: "Order Food",
    image: "https://links.papareact.com/28w",
    sreen: "EatsScreen",
  },
  {
    id: "9102",
    title: "Whatsup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png",
    sreen: "WhatsupScreen",
  },
];
const NavOptions = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.sreen)}
          style={tw`bg-gray-200 pl-20 pt-2 m-2 w-80`}
        >
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
