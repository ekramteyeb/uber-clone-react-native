import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, TouchableOpacity, Text, View, Image } from "react-native";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { selectOrigin } from "../slices/navSlice";

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
  /* {
    id: "9102",
    title: "Whatsup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png",
    sreen: "WhatsupScreen",
  }, */
  {
    id: "9103",
    title: "Countries",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/GDJ-World-Flags-Globe_.svg/640px-GDJ-World-Flags-Globe_.svg.png",
    sreen: "CountriesScreen",
  },
  {
    id: "9206",
    title: "Notifications",
    image:
      "data:image/png;base64,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",
    sreen: "SendNotificationScreen",
  },
];
const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal={false}
      numColumns={2}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.sreen)}
          style={[tw`bg-gray-300 p-2 m-2`, { borderRadius: 6, width: "46%" }]}
          //if(origin is not set )
          disabled={!origin}
        >
          <View
            style={[
              tw`${!origin && "opacity-20"}`,
              {
                paddingLeft: 6,
              },
            ]}
          >
            <Image
              style={{
                width: 110,
                height: 60,
                paddingLeft: 120,
                resizeMode: "contain",
              }}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-2`}
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
