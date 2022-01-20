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
        "https://daki-ecommerce.herokuapp.com/api/v1/products"
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
              <View style={[styles.item, tw`bg-gray-200`]}>
                <View style={styles.productImageContainer}>
                  <Image
                    style={styles.productImage}
                    source={{
                      uri: `${item.image}`,
                    }}
                  />
                </View>
                <Text styles={styles.title}>{item.name}</Text>
                <Text styles={styles.title}> € {item.price}</Text>
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
    width: 100,
    height: 80,
    resizeMode: "contain",
    borderRadius: 5,
  },
  productImageContainer: {
    borderWidth: 8,
    borderColor: "#888",
    padding: 5,
    borderRadius: 5,
  },
});
