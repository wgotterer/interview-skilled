import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import prudctsReducer from "./store/reducers/products";
import ShopNavigation from "./navigation/ShopNavigation";
import { AppLoading } from "expo-app-loading";
import {
  useFonts,
  OpenSans_300Light,
  OpenSans_300Light_Italic,
  OpenSans_400Regular,
  OpenSans_400Regular_Italic,
  OpenSans_600SemiBold,
  OpenSans_600SemiBold_Italic,
  OpenSans_700Bold,
  OpenSans_700Bold_Italic,
  OpenSans_800ExtraBold,
  OpenSans_800ExtraBold_Italic,
} from '@expo-google-fonts/open-sans';

import * as Font from "expo-font";

const rootReducer = combineReducers({
  products: prudctsReducer,
});

const store = createStore(rootReducer);




export default function App() {

  let [fontsLoaded] = useFonts({
    OpenSans_300Light,
    OpenSans_300Light_Italic,
    OpenSans_400Regular,
    OpenSans_400Regular_Italic,
    OpenSans_600SemiBold,
    OpenSans_600SemiBold_Italic,
    OpenSans_700Bold,
    OpenSans_700Bold_Italic,
    OpenSans_800ExtraBold,
    OpenSans_800ExtraBold_Italic,
  });


  if (!fontsLoaded) {
    return null;
  }else {
    return (
      <Provider store={store}>
        <ShopNavigation />
      </Provider>
    );
  }

  
}
