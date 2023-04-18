import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import DateTimePickerModal from 'react-native-modal-datetime-picker';

import { MaterialIcons, Entypo } from '@expo/vector-icons'

const GoogleImageSrc = '../../../assets/images/google.png'
const FacebookImageSrc = '../../../assets/images/facebook.png'
const TwitterImageSrc = '../../../assets/images/twitter.png'
const RegistrationImageSrc = '../../../assets/images/registration.png'

import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'

const RegisterScreen = () => {
    const [ date, setDate ] = useState(new Date())
    const [ open, setOpen ] = useState(false)
    const [ birthLabel, setBirthLabel ] = useState('Data de nascimento')

    return (
        <SafeAreaView
            style={{
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            <ScrollView
                showsVerticalScrollIndicator={ false }
                style = {{
                    paddingHorizontal: 25
                }}>
                <View style={{
                    alignItems: 'center'
                }}>
                    <Image source={require(RegistrationImageSrc)}
                    style={{
                        height: 300,
                        width: 300,
                        transform: [
                            {
                                rotate: '-5deg'
                            }
                        ]
                    }}/>
                </View>

                <Text style={{
                    fontSize: 28,
                    fontWeight: 500,
                    color: '#000',
                    marginBottom: 30
                }}>
                    Registrar-se
                </Text>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 30
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

                <Text style={{
                    textAlign: 'center',
                    color: '#000',
                    marginBottom: 30
                }}>
                    Ou, Registre-se com seu e-mail...
                </Text>

                <CustomInput 
                    label={'Informe aqui o seu E-mail'}
                    icon={<MaterialIcons
                        name='alternate-email'
                        size={20}
                        color='#666'
                        style={{ marginRight: 5 }}
                        />}
                    keyboardType={'email-address'}
                />

                <CustomInput 
                    label={'Informe aqui o seu nome completo'}
                    keyboardType={'default'}
                />

                <CustomInput 
                    label={'Informe aqui o seu nome de usuario'}
                    keyboardType={'default'}
                />

                <CustomInput 
                    label={'Informe aqui a sua senha'}
                    icon={<Entypo
                        name='key'
                        size={20}
                        color='#666'
                        style={{ marginRight: 5 }}
                        />}
                    inputType={'password'}
                />

                <CustomInput 
                    label={'Confirme a sua senha'}
                    icon={<Entypo
                        name='key'
                        size={20}
                        color='#666'
                        style={{ marginRight: 5 }}
                        />}
                    inputType={'password'}
                />

                <View
                    style={{
                        flexDirection: 'row',
                        borderBottomColor: '#fff',
                        borderBottomWidth: 1,
                        paddingBottom: 8,
                        marginBottom: 30
                    }}
                >
                    <Entypo
                        name='calendar'
                        size={20}
                        color='#666'
                        style={{ marginRight: 5 }}
                    />
                    <TouchableOpacity onPress={() => setOpen(true)}>
                        <Text style={{
                            color: '#000',
                            marginLeft: 5,
                            marginTop: 5
                        }}>
                            { birthLabel }
                        </Text>
                    </TouchableOpacity>
                </View>

                <DateTimePickerModal
                    isVisible={open}
                    mode="date"
                    maximumDate={new Date('2010-12-31')}
                    minimumDate={new Date('1950-01-01')}
                    onConfirm={date => {
                        setOpen(false)
                        setDate(date)
                        setBirthLabel(date.toDateString())
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                />

                <CustomButton 
                    label={'Registrar'}
                    onPress={() => {}}
                />

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginBottom: 30,
                        marginTop: 20
                    }}
                >
                    <Text>Já possui cadastro? </Text>
                    <TouchableOpacity onPress={() => {}}>
                        <Text
                            style = {{
                                color: '#000', 
                                fontWeight: '700',
                            }}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default RegisterScreen;