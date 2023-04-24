import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";

import { MaterialIcons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
    return(
        <SafeAreaView
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff'
            }}>
                <View
                    style={{
                        marginTop: 40
                    }}>
                        <Text
                            style={{
                                fontWeight: 'bold',
                                fontSize: 35,
                                color: '#666'
                            }}>
                                REACTFLIX
                            </Text>
                </View>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#8B0000',
                        padding: 20,
                        width: '90%',
                        borderRadius: 10,
                        marginBottom: 50,
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                    onPress={() => navigation.navigate('Login')}>

                    <Text
                        style={{
                            color: 'white',
                            fontSize: 18,
                            textAlign: 'center',
                            fontWeight: 'bold'
                        }}>
                            Entrar
                        </Text>
                        <MaterialIcons
                            name='login'
                            size={20}
                            color={'#fff'}
                            style={{ marginRight: 5 }}
                            />
                </TouchableOpacity>
        </SafeAreaView>
    )
}

export default HomeScreen