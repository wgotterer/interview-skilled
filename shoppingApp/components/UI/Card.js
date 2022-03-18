import React from 'react'
import { View, StyleSheet } from 'react-native'

const Card = props => {
return(
    <View style={{...styles.card, ...props.style}}>
        {props.children}
    </View>
)
}

const styles = StyleSheet.create({
card: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    // shadow only works with ios so add elevation
    elevation: 5,
    borderRadius: 10,
    // always has this background color even if app has different color
    backgroundColor: "white",
}
})

export default Card