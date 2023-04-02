import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCards = () => {
    return (
        <View >
            <Text style={styles.headingText}>Flat Cards</Text>
            <View style={styles.container}>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>Red React Native</Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text>Blue React Native</Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text>Green React Native</Text>
                </View>
            </View>
        </View>
    )
}

export default FlatCards

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row'
    },

    headingText: {
        fontSize: 24,
        fontWeight: 'bold',

    },
    card: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 10,
        marginTop:8,
    },
    cardOne: {
        backgroundColor:'#EF5354'
    },
    cardTwo: {
        backgroundColor:'#6495ed'
    },
    cardThree: {
        backgroundColor:'#00ff00'
    },
})
