import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native'


const MealItem = props => {
    return(
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{...styles.mealRow, ...styles.mealHeader}}>
                        <Text>
                            {props.title}
                        </Text>
                    </View>
                    <View style={{...styles.mealRow, ...styles.mealDetail}}>
                        <Text>{props.duration}m</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: "100%",
        backgroundColor: "#ccc",
    },
    mealRow: {
        flexDirection: "row"
    },
    mealHeader:{
        height: "90%"
    },
    mealDetail:{
        paddingHorizontal: 10,
        // use spacebetween to evenly distribute items on horizonatal axis
        justifyContent: "space-between"

    }
})

export default MealItem