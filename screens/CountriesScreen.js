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
      setProducts(json);
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
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}> {products.length} Available Products</Text>
      {products?.length !== 0 ? (
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => alert(`${item.rating}`)}>
              <View style={[styles.item, tw`bg-gray-600`]}>
                <View style={styles.productImageContainer}>
                  <Image
                    style={styles.productImage}
                    source={{
                      uri: `${item?.image?.url}`,
                    }}
                  />
                </View>
                <Text styles={styles.title}>{item.name}</Text>
                <Text styles={styles.title}> € {item.adaptability}</Text>
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
    backgroundColor: "#f0f8ff",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 6,
    marginHorizontal: 8,
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    position: "relative",
  },
  title: {
    fontSize: 48,
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
    width: 120,
    height: 120,
    resizeMode: "cover",
  },
  productImageContainer: {
    width: 128,
    paddingLeft: 0,
    borderWidth: 2,
    borderRightColor: "green",
  },
});
