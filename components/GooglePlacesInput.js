import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GOOGLE_API_KEY } from "@env";
import tw from "tailwind-react-native-classnames";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const GooglePlacesInput = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Where to go"
      minLength={2}
      autoFocus={false}
      returnKeyType={"default"}
      fetchDetails={true}
      styles={{
        textInputContainer: {
          backgroundColor: "#fff",
        },
        textInput: {
          height: 44,
          color: "#5d5d5d",
          fontSize: 16,
          borderRadius: 5,
          paddingVertical: 5,
          paddingHorizontal: 10,
          flex: 1,
        },
        predefinedPlacesDescription: {
          color: "#1faadb",
        },
      }}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
        console.log("Say someithig");
      }}
      query={{
        key: "GOOGLE_API_KEY",
        language: "en",
      }}
    />
  );
};

export default GooglePlacesInput;

const styles = StyleSheet.create({});
