import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../assets/config/colors'
export default function AppButton({title}) {
    return (
        <View style= {styles.button}> 
        <Text style={styles.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    button: { 
        backgroundColor: colors.buttons,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: "100%",
    },
    text: {
        color: colors.buttonText,
        fontSize: 18,
        fontWeight: "bold",
    }
})
