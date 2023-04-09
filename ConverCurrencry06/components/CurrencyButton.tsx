import React from 'react'
import type { PropsWithChildren } from 'react'

import { View, Text, StyleSheet } from 'react-native'

type CurrencyButtonProps = PropsWithChildren<{
    name: string;
    flag: string;
}>


const CurrencyButton = (Props: CurrencyButtonProps) => {
    return (
        <>
            <View style={Styles.buttonContainer}>
                <Text style={Styles.flag}>{Props.flag}</Text>
                <Text style={Styles.country}>{Props.name}</Text>
            </View>
        </>
    )
}


const Styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
    },
    flag:{
        fontSize:28,
        color:'#FFFFFF',
        marginBottom:4,
    },
    country:{
        fontSize:14,
        color:'#2d3436'
    }
})




export default CurrencyButton