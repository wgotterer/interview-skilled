import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Platform } from 'react-native'


const MealItem = props => {
    return(
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{...styles.mealRow, ...styles.mealHeader}}>
                        <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
                        <Text style={styles.title}>
                            {props.title}
                        </Text>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealRow, ...styles.mealDetail}}>
                        <Text>{props.duration}m</Text>
                        <Text>{props.complexity.toUpperCase()}</Text>
                        <Text>{props.affordability.toUpperCase()}</Text>
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
    bgImage:{
        width: "100%",
        height: "100%"
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

    },
    title:{
        fontFamily: "open-sand-bold",
        fontSize: 22,
        color: "white",
        // rgba has built in transparency so even if picture is white we can read the title
        backgroundColor: "rgba(0,0,0,0.5)",
        // background color box does not sit on edges of text
        paddingVertical: 5,
        paddingHorizontal: 15
    }
})

export default MealItem