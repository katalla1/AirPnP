import React from 'react'
import { ImageBackground, StyleSheet, Text, View, Button } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppButton from '../../components/AppButton';
import colors from '../config/colors';
export default function LoginScreen() {
    return (
        <ImageBackground style={{ flex:1, justifyContent: "center"}}       
            source= {require("../../assets/background.jpg")}
        >
            <View style= {styles.loginButton}>
                <AppButton  title= "Login" />
            </View>
            <View style= {styles.registerButton}>
                <AppButton  title= "Register"/>
            </View>
            
        </ImageBackground>
        
    )
}

const styles = StyleSheet.create({

loginButton: {
    position: "absolute",
    bottom: 100,
    left: 20,
    width: "40%",
    height: 30,
    
},
registerButton: {
    position: "absolute",
    bottom: 100,
    right: 20,
    width: "40%",
    height: 30,
},

})
