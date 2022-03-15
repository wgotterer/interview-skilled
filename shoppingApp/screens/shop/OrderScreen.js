import React from "react";
import { View, Text, FlatList, StyleSheet, Platform } from "react-native";
import Colors from "../../constants/Colors";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI/HeaderButton";

const OrdersScreen = props => {
const orders = useSelector(state => state.orders.orders)

return(
    <FlatList data={orders} keyExtractor={item => item.id} renderItem={itemData => <Text>{itemData.item.totalAmount}</Text>} />
)
}

OrdersScreen.navigationOptions = navData => {
    return {
        headerLeft: () => ( <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="Menu"
              iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
              onPress={() => {
                navData.navigation.toggleDrawer()
              }}
            />
          </HeaderButtons>
          ),  
          headerTitle: "Your Orders"
    }
   
}

export default OrdersScreen