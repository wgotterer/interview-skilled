import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const CategoriesMealsScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>The Categories Meal Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default CategoriesMealsScreen