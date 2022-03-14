import React from "react";
import { View, Text, Flatlist, StyleSheet, Button } from "react-native";
import Colors from "../../constants/Colors";
import { useSelector } from "react-redux";

const CartScreen = (props) => {
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const CartItems = useSelector(state => {
      const transformedCardItems = []
      for (const key in state.cart.items){
          transformedCardItems.push({
              productId: key,
              productTitle: state.cart.items[key].productTitle,
              productPrice: state.cart.items[key].productPrice,
              quantity: state.cart.items[key].quantity,
              sum: state.cart.items[key].sum,

          })
      }
      return transformedCardItems
  })

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total: <Text style={styles.amount}>${cartTotalAmount.toFixed(2)}</Text>
        </Text>
        {/* disabled prop is false unless what is equal is true */}
        <Button color={Colors.accent} title="Order Now" disabled={CartItems.length === 0} />
      </View>
      <View>
        <Text>Cart Items</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 20,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    // shadow only works with ios so add elevation
    elevation: 5,
    borderRadius: 10,
    // always has this background color even if app has different color
    backgroundColor: "white",
  },
  summaryText: {
    fontFamily: "OpenSans_700Bold",
    fontSize: 18,
  },
  amount: {
    color: Colors.primary,
  },
});

export default CartScreen;
