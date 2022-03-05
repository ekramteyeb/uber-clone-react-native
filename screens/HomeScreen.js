import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import tw from "tailwind-react-native-classnames";
import GooglePlacesInput from "../components/GooglePlacesInput";
import NavOptions from "../components/NavOptions";
import { GOOGLE_API_KEY } from "@env";
import { useDispatch } from "react-redux";
import { setDetination, setOrigin } from "../slices/navSlice";

export default function HomeScreen() {
  const dispatch = useDispatch();
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
        <GooglePlacesAutocomplete
          placeholder="Where From"
          minLength={2}
          autoFocus={false}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDetination(null));
          }}
          fetchDetails={true}
          query={{
            key: GOOGLE_API_KEY,
            language: "en",
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          styles={{
            container: { flex: 0 },
            textInput: {
              fontSize: 18,
            },
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
