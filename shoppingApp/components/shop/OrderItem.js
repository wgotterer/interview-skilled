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
import CartItem from "./CartItem";

const OrderItem = (props) => {
  return (
    <View style={styles.orderItem}>
      <View style={styles.summary}>
        <Text style={styles.totalAmount}>${props.amount.toFixed(2)}</Text>
        <Text style={styles.date}>{props.date}</Text>
      </View>
      <Button color={Colors.primary} title="Show Details" />
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
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  },
  totalAmount: {
    fontFamily: 'OpenSans_700Bold',
    fontSize: 16,
  },
  date: {
    fontFamily: 'OpenSans_400Regular',
    fontSize: 16,
    color: "red"
  }
});

export default OrderItem;
