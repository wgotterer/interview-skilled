import React from 'react'
import { View, Text, Button, StyleSheet, Platform } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import Colors from '../constants/Colors'

const CategoryMealsScreen = props => {

    const catId = props.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);



    return(
        <View style={styles.screen}>
            <Text>The Categories Meal Screen</Text>
            <Text>{selectedCategory["title"]}</Text>
            <Button title="Go Details!" onPress={() => {
                props.navigation.navigate({routeName: "MealDetail"})
            }} />
            <Button title="Go back" onPress={() => {
                props.navigation.goBack()
            }} />
        </View>
        
    )
}

// have it as a function that depends on changing data/ dynamic.
// By default navigation gives us the title as the title as back text if there is space
// when calling the navigationOptions method on the function we get a props and 
// in the prop we can access navigation object that has the getParam method
CategoryMealsScreen.navigationOptions = (navigationData) => {
    
    const catId = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return{
        headerTitle: selectedCategory.title,
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default CategoryMealsScreen