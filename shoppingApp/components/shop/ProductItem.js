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

const ProductItem = (props) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.product}>
      <View style={styles.touchable}>
        {/*  useForGround allows the whole components */}
        <TouchableCmp onPress={props.onViewDetail} useForeground>
          <View>
            {/* added imageContainer view becuase before the image overlapped and got rid of the rounded product border*/}
            <View style={styles.imageContainer}>
              {/* need to set up width and height for network images */}
              <Image style={styles.image} source={{ uri: props.image }} />
            </View>
            <View style={styles.detail}>
              <Text style={styles.title}>{props.title}</Text>
              {/* toFixed js function that converts what is being called on a number that only allows 2 decimals */}
              <Text style={styles.price}>${props.price.toFixed(2)}</Text>
            </View>

            {/* Wrap the buttons in a view so that I can put buttons side by side using flex firection row */}
            <View style={styles.actions}>
              <Button
                color={Colors.primary}
                title="View Details"
                onPress={props.onViewDetail}
              />
              <Button
                color={Colors.primary}
                title="To Cart"
                onPress={props.onAddToCart}
              />
            </View>
          </View>
        </TouchableCmp>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    // shadow only works with ios so add elevation
    elevation: 5,
    borderRadius: 10,
    // always has this background color even if app has different color
    backgroundColor: "white",
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
    height: "15%",
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
    height: "25%",
    paddingHorizontal: 20,
  },
});

export default ProductItem;
