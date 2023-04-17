import React from "react";
import { SafeAreaView, View, Text } from "react-native";

import LoginScreen  from './src/screens/login/loginScreen'

export default function App() {
  return(
    <SafeAreaView>
        <LoginScreen></LoginScreen>
    </SafeAreaView>
  )
}