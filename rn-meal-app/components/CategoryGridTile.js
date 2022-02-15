import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native'
import { ScreenContainer } from 'react-native-screens'



const CategoryGridTile = props => {
  let TouchableCmp = TouchableOpacity;

  if(Platform.OS === "android" && Platform.version >= 21){
    TouchableCmp = TouchableNativeFeedback
  }
    return(
        <TouchableCmp style={styles.gridItem} onPress={props.onSelect} >
        <View style={{...styles.container, ...{backgroundColor: props.color}}}>
          {/*numberOfLines used so that if anything is longer it goes to a new lone  */}
          <Text style={styles.title} numberOfLines={2} >{props.title} </Text>
        </View>
      </TouchableCmp>
    )
}

const styles = StyleSheet.create({
    gridItem:{
        // flex:1 fills up the entire screen
        flex: 1,
        margin: 15,
        height: 150,

    },
    container: {
      flex:1,
      borderRadius: 10,
      shadowColor: "black",
      shadowOpacity: 0.26,
      shadowOffset: {width: 0, height: 4},
      shadowRadius: 10,
      //  elevation for android becuase the shadow only effects ios
      elevation: 3,
      padding: 15,
      // flexbox is top to bottom in RN so flex end will put it on the bottom
      justifyContent: "flex-end",
      // alignItems is set to flex-end to move it to the right on 
      // horizontal axis or cross axis which is left to right
      alignItems: "flex-end"

    },
    title: {
      fontFamily: "open-sans-bold",
      fontSize: 22,
      // android was putting it on the left so used texAlign: right
      textAlign: "right"
    }
})

export default CategoryGridTile
