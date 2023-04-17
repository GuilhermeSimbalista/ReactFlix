import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export default function CustomButton({ label, onPress }) {
    return (
        <TouchableOpacity
            onPress={ onPress }
            style={{
                backgroundColor: '#8B0000',
                padding: 20,
                borderRadius: 10,
                marginBotton: 30,
            }}>
                <Text
                    style={{
                        textAlign: 'center',
                        fontWeight: 700,
                        fontSize: 16,
                        color: '#fff'
                    }}>
                        { label }
                </Text>
        </TouchableOpacity>
    )
}