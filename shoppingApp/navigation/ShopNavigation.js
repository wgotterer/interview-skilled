import {createStackNavigator} from "react-navigation-stack"
import { createAppContainer } from "react-navigation"; 
import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen"
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen"
import Colors from "../constants/Colors"
import { Platform } from "react-native"

const ProductsNavigator = createStackNavigator({

    ProductOverview: ProductOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? Colors.primary : ''
        },
        headerTitleStyle: {
            fontFamily: "OpenSans_700Bold"
        },
        headerBackTitleStyle: {
            fontFamily: "OpenSans_400Regular"
        },
        headerTintColor: Platform.OS === "android" ? "white" : Colors.primary
    }
})

export default createAppContainer(ProductsNavigator)