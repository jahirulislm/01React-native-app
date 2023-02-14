import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCard = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>ElevatedCard</Text>
            <ScrollView>
                <View style={styles.containerTab}>
                    <View style={[styles.card, styles.cardElevated]}>
                        <Text style={styles.textColor}>Tap</Text>
                    </View>
                    <View style={[styles.card, styles.cardElevated]}>
                        <Text style={styles.textColor}>Tap</Text>
                    </View>
                    <View style={[styles.card, styles.cardElevated]}>
                        <Text style={styles.textColor}>Tap</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default ElevatedCard

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        padding: 8,
    },
    containerTab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',

    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 10,
        marginTop: 8,
        backgroundColor: 'red'
    },
    cardElevated: {
        marginRight: 8,

    },
    textColor: {
        color: 'white'
    }
})