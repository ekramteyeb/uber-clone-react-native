import React, { useEffect, useState } from "react";
import tw from "tailwind-react-native-classnames";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  FlatList,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";

const CountriesScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    try {
      let response = await fetch(
        //"https://daki-ecommerce.herokuapp.com/api/v1/products"
        //"https://restcountries.com/v2/all"
        "https://api.thecatapi.com/v1/breeds?&api_key=d2fa1b3f-bf8a-41be-9ff9-633e9bd15621"
      );
      let json = await response.json();
      let fileterd = json.filter((x, i) => (i % 2 == 0 ? x : ""));
      setProducts(fileterd);
    } catch (error) {
      console.log(error);
    }
  }, []);
  /* const getArticlesFromApi = async () => {
    let response = await fetch(
      "https://daki-ecommerce.herokuapp.com/api/v1/products"
    );
    let json = await response.json();
    set;

    //return json;
  }; */

  return (
    <SafeAreaView style={[styles.container, tw`bg-gray-200`]}>
      {products?.length !== 0 ? (
        <FlatList
          data={products}
          initialNumToRender={5}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                alert(
                  `name : ${item.name} \n  ${item.temperament} \n Adaptability : ${item.adaptability}`
                )
              }
            >
              <View style={[styles.item, tw`bg-white`]}>
                <View style={styles.productImageContainer}>
                  <Image
                    style={styles.productImage}
                    source={{
                      uri: `${item?.image?.url}`,
                    }}
                  />
                </View>
                <View style={tw`items-center p-5`}>
                  <Text style={styles.title}>Name : {item.name}</Text>
                  <Text style={styles.title}>
                    Adaptability: {item.adaptability}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          /* extraData={selectedId} */
        />
      ) : (
        <Text>noting to display</Text>
      )}
    </SafeAreaView>
  );
};

export default CountriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 18,
    marginVertical: 6,
    marginHorizontal: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    position: "relative",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Cochin",
  },

  header: {
    fontSize: 32,
    fontWeight: "bold",
    color: "orange",
    paddingLeft: 15,
    paddingBottom: 15,
    paddingTop: 15,
  },
  productImage: {
    width: 140,
    height: 130,
    borderRadius: 6,
    resizeMode: "cover",
  },
  productImageContainer: {
    paddingLeft: 0,
  },
});
