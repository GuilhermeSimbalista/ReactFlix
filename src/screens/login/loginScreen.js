import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

//import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
//import IonicIcons from 'react-native-vector-icons/Ionicons'
import { MaterialIcons, Entypo } from '@expo/vector-icons'

const GoogleImageSrc = '../../../assets/images/google.png'
const FacebookImageSrc = '../../../assets/images/facebook.png'
const TwitterImageSrc = '../../../assets/images/twitter.png'

import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'

const LoginScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{
            display: 'flex',
            justifyContent: 'center',
            paddingVertical: 50
        }}>
            <View style={{ paddingHorizontal: 25 }}>
                <Text style={{
                    fontSize: 28,
                    fontWeight: '500',
                    color: '#000',
                    marginBottom: 30
                }}>
                    Login
                </Text>
                <CustomInput 
                    label={'E-mail'}
                    icon={
                        <MaterialIcons
                            name='alternate-email'
                            size={20}
                            color='#666'
                            style={{ marginRight: 5 }}
                        />
                    }
                    keyboardType={'email-address'}
                />
                <CustomInput 
                    label={'Password'}
                    icon={
                        <Entypo
                            name='key'
                            size={20}
                            color='#666'
                            style={{ marginRight: 5 }}
                        />
                    }
                    inputType='password'
                    fieldButtonLabel={'Esqueceu sua senha?'}
                    fieldButtonFunction={() => {}}
                />
                <CustomButton 
                    label={'login'}
                    onPress={() => {}}
                />
                <Text style={{
                    textAlign: 'center',
                    color: '#000',
                    marginBottom: 15,
                    marginTop: 15
                }}>
                    Ou Logar com...
                </Text>
                <View style ={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 30,
                }}>
                    <TouchableOpacity 
                        style={{
                            borderColor: '#ddd',
                            borderWidth: 2,
                            borderRadius: 10,
                            paddingHorizontal: 30,
                            paddingVertical: 10
                        }}
                        onPress={() => {}} > 
                        <Image 
                            source={require(GoogleImageSrc)}
                            style={{
                                height: 24,
                                width: 24
                            }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            borderColor: '#ddd',
                            borderWidth: 2,
                            borderRadius: 10,
                            paddingHorizontal: 30,
                            paddingVertical: 10
                        }}
                        onPress={() => {}}>
                        <Image 
                            source={require(FacebookImageSrc)}
                            style={{
                                height: 24,
                                width: 24
                            }}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            borderColor: '#ddd',
                            borderWidth: 2,
                            borderRadius: 10,
                            paddingHorizontal: 30,
                            paddingVertical: 10
                        }}
                        onPress={() => {}}>
                        <Image 
                            source={require(TwitterImageSrc)}
                            style={{
                                height: 24,
                                width: 24
                            }}/>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginBottom: 30
                }}>
                    <Text>Novo por aqui?</Text>
                    <TouchableOpacity>
                        <Text>Registrar-se</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}


export default LoginScreen;