import Color from "color";
import React from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  Button,
  StyleSheet,
} from "react-native";
import { useSelector } from "react-redux";
import Colors from "../../constants/Colors";




const ProductDetailScreen = (props) => {
    
  const productId = props.navigation.getParam("productId");

  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find(
      (prod) => prod.id === productId
    )


  );
  return (
   
    <ScrollView>
      <Image style={styles.image} source={{uri: selectedProduct.imageUrl}} />
      <View style={styles.action}>
      <Button color={Colors.primary} title="Add to Cart" onPress={() => {}} />
      </View>
      <Text style={styles.price}>${selectedProduct.price}</Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};

ProductDetailScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('productTitle')
    }
}
const styles = StyleSheet.create({
image:{
width: "100%",
height: 300
},
action: {
alignItems: "center",
marginVertical: 10,
},
price:{
fontSize: 20,
color: "#888",
textAlign: "center",
marginVertical: 20,
fontFamily: "OpenSans_700Bold",

},
description: {
fontSize: 14,
textAlign: "center",
// marginHorizontal to break text line for longer descriptions.
marginHorizontal: 20,
fontFamily: "OpenSans_400Regular",
}
})

export default ProductDetailScreen;
