import React from "react";
import { SafeAreaView, View, Text } from "react-native";

import LoginScreen  from './src/screens/login/loginScreen'
import RegisterScreen from "./src/screens/register/registerScreen";
import HomeScreen from "./src/screens/home/homeScreen";

export default function App() {
  return(
    <SafeAreaView>
        <HomeScreen></HomeScreen>
    </SafeAreaView>
  )
}