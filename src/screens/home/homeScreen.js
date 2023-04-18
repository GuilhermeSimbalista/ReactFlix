import React from "react";
import { SafeAreaView, View, Image, Text, TouchableOpacity } from "react-native";

import { MaterialIcons } from '@expo/vector-icons'

const HomeScreen = () => {
    return ( 
        <SafeAreaView
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
                <View style={{
                    marginTop: 20
                }}>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 30,
                            color: '#000'
                        }}
                        >
                        REACTFLIX
                    </Text>
                </View>
                
                <TouchableOpacity 
                    style={{
                        backgroundColor: '#666',
                        padding: 20,
                        width: '90%',
                        borderRadius: 10,
                        marginBottom: 50,
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                    onPress={() => {}}
                >
                    <Text
                        style={{
                            color: '#000',
                            fontSize: 18,
                            textAlign: 'center',
                            fontWeight: 'bold'
                        }}
                    >
                        Login
                    </Text>
                    <MaterialIcons
                            name='arrow-back'
                            size={20}
                            color='#666'
                            style={{ marginRight: 5 }}
                        />
                </TouchableOpacity>
            </SafeAreaView>
)}

export default HomeScreen;