import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/login/loginScreen";
import RegisterScreen from "../screens/register/registerScreen";
import HomeScreen from "../screens/home/homeScreen";

const Stack = createNativeStackNavigator() 

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen}/>

        </Stack.Navigator>
    )
}

export default AuthStack;