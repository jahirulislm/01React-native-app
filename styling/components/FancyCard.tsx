import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCard = () => {
    return (
        <View>
            <Text style={styles.headingText}>Trending Images</Text>

            <View
                style={[styles.card, styles.cardElevated]}>
                <Image
                    style={styles.cardImage}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png'
                    }}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>React-native Logo</Text>
                    <Text style={styles.cardLabel}>A mobile app builder</Text>
                    <Text style={styles.cardDesc}>React-native is a mobile application builder from Facebook. We can build mobile app for Android and IOS</Text>
                    <Text style={styles.cardFooter}>Learn building app with react-native library</Text>
                </View>
            </View>
        </View>
    )
}

export default FancyCard

const styles = StyleSheet.create({
    headingText: {
        color: 'red',
        paddingLeft:12,
        fontSize:22,
        fontWeight:'bold'
    },
    card: {
        width: 350,
        height: 360,
        borderRadius: 8,
        // backgroundColor:'red',
        marginVertical: 12,
        marginHorizontal: 16,
    },
    cardElevated: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        color: '#000000',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1,
        }
    },
    cardImage: {
        width: 100,
        height: 100,
        marginTop: 12,
        marginBottom:8,

    },
    cardBody: {
        color: '#000000',
        flex:1,
        flexGrow:1,
        paddingHorizontal:12,
    },
    cardTitle: {
        color: '#000000',
        fontSize:22,
        fontWeight:'bold',
        marginBottom:6,
    },
    cardLabel: {
        color: '#000000',
        fontSize:14,
        marginBottom:2,
        fontWeight:'bold',

    },
    cardDesc: {
        color: '#000000',
        fontSize:14,
        marginBottom:2,
        fontWeight:'bold',
    },
    cardFooter: {
        color: '#000000',
        fontWeight:'bold',
    }
})