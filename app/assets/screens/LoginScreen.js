import React from 'react'
import { ImageBackground, StyleSheet, Text, View, Button, TextInput } from 'react-native'
import AppButton from '../../components/AppButton';
import AppTextInput from '../../components/AppTextInput';
import AppText from '../../components/AppText';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password")
})

export default function LoginScreen() {
    return (
        <ImageBackground style={{ flex:1, justifyContent: "center"}}       
            source= {require("../../assets/background.jpg")}
        >
            <Formik
                initialValues={{ email: "", password: ""}}
                onSubmit={() => console.log("change this to  database login") } 
                validationSchema={validationSchema}
            >
                { ({handleChange, handleSubmit, errors }) => (
                    <>
                        <View style={styles.inputFields}>
                            <AppTextInput 
                                autoCapitalize="none"
                                autoCorrect={false}
                                icon="email"
                                keyboardType="email-address"
                                onChangeText={handleChange("email")}
                                placeholder="Email"
                                textContentType="emailAddress"
                            />
                            <Text style= {{color: 'red'}}>{errors.email}</Text>
                            <AppTextInput  
                                autoCapitalize= "none" 
                                autoCorrect= {false}
                                icon= "lock"
                                onChangeText={handleChange("password")}
                                placeholder="Password"
                                secureTextEntry
                                textContentType="password"
                            />
                            <Text style= {{color: 'red'}}>{errors.password}</Text>
                        </View>
                        <View style= {styles.loginButton}>
                            <AppButton  title= "Login" onPress={() => handleSubmit}/>
                        </View>
                    </>
                )}
            </Formik>
            
            <View style= {styles.registerButton}>
                <AppButton  title= "Register"/>
            </View>
            <View style= {styles.guestButton}>
                <AppButton  title= "Guest"/>
            </View>
        </ImageBackground>
        
    )
}

const styles = StyleSheet.create({

loginButton: {
    position: "absolute",
    bottom: 90,
    left: 20,
    right:20,
    height: 30,
    marginBottom:10,
    
},
registerButton: {
    position: "absolute",
    bottom: 50,
    right: 20,
    width: "40%",
    height: 30,
},

guestButton: {
    position: "absolute",
    bottom: 50,
    left: 20,
    width: "40%",
    height: 30,
},
inputFields:{
    position: "absolute",
    bottom: 150,
    left:20,
    right:20,
   
},


})
