import React, { useState } from "react";
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
import CartItem from "./CartItem";

const OrderItem = (props) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <View style={styles.orderItem}>
      <View style={styles.summary}>
        <Text style={styles.totalAmount}>${props.amount.toFixed(2)}</Text>
        <Text style={styles.date}>{props.date}</Text>
      </View>
      <Button
        color={Colors.primary}
        title={ showDetails ? "Hide Details" : "Show Details"}
        onPress={() => {
          setShowDetails((prevState) => !prevState);
        }}
      />
      {showDetails && (
        <View style={styles.detailItems}>
          {props.items.map((cartItem) => (
            <CartItem
              key={cartItem.productId}
              quantity={cartItem.quantity}
              amount={cartItem.sum}
              title={cartItem.productTitle}
            />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  orderItem: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    // shadow only works with ios so add elevation
    elevation: 5,
    borderRadius: 10,
    // always has this background color even if app has different color
    backgroundColor: "white",
    margin: 20,
    padding: 10,
    alignItems: "center",
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 15,
  },
  totalAmount: {
    fontFamily: "OpenSans_700Bold",
    fontSize: 16,
  },
  date: {
    fontFamily: "OpenSans_400Regular",
    fontSize: 16,
    color: Colors.primary,
  },
  detailItems: {
      width: "100%"
  }
});

export default OrderItem;
