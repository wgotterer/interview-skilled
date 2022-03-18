import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import Colors from "../../constants/Colors";
import Card from "../UI/Card";

const ProductItem = (props) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  let price = +props.price
  price = price.toFixed(2)

  return (
    <Card style={styles.product}>
      <View style={styles.touchable}>
        {/*  useForGround allows the whole components */}
        <TouchableCmp onPress={props.onSelect} useForeground>
          <View>
            {/* added imageContainer view becuase before the image overlapped and got rid of the rounded product border*/}
            <View style={styles.imageContainer}>
              {/* need to set up width and height for network images */}
              <Image style={styles.image} source={{ uri: props.image }} />
            </View>
            <View style={styles.detail}>
              <Text style={styles.title}>{props.title}</Text>
              {/* toFixed js function that converts what is being called on a number that only allows 2 decimals */}
              <Text style={styles.price}>${price}</Text>
            </View>

            {/* Wrap the buttons in a view so that I can put buttons side by side using flex firection row */}
            <View style={styles.actions}>
              {props.children}
            </View>
          </View>
        </TouchableCmp>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  product: {
    
    height: 300,
    margin: 20,
  },

  touchable: {
    overflow: "hidden",
    borderRadius: 10,
  },

  imageContainer: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopLeftRadius: 10,
    // any child in this container cant overlap with hidden overlap
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  detail: {
    //   centers horizontally becuase flex direction is column by default
    alignItems: "center",
    height: "17%",
    padding: 6,
  },
  title: {
    fontSize: 18,
    marginVertical: 2,
    fontFamily: 'OpenSans_700Bold'
  },
  price: {
    fontSize: 14,
    color: "#888",
    fontFamily: "OpenSans_400Regular",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "23%",
    paddingHorizontal: 20,
  },
});

export default ProductItem;
