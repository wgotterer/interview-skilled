import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import prudctsReducer from "./store/reducers/products"
import ShopNavigation from './navigation/ShopNavigation';


const rootReducer = combineReducers({
  products: prudctsReducer
})

const store = createStore(rootReducer)

export default function App() {
  return (
    <Provider store={store}>
    <ShopNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
