// import React from 'react'
// // need to wrap main navigator is createAppContainer
// import{createStackNavigator} from "react-navigation-stack"

// import{createAppContainer} from "react-navigation"
// import CategoriesScreen from "../screens/CategoriesScreen"
// import CategoriesMealsScreen from '../screens/CategoryMealsScreen'

// const MealsNavigator = () => createStackNavigator({
//     Categories: CategoriesScreen,
//     CategoryMeals : CategoriesMealsScreen,
//     MealDetail : MealDetailScreen
// })


// export default createAppContainer(MealsNavigator)

import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMealsScreen
  },
  MealDetail: MealDetailScreen
});

export default createAppContainer(MealsNavigator);