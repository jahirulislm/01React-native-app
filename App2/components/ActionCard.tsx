import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ActionCard = () => {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>

                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        What's new in react-native
                    </Text>
                </View>
                <Image source={{
                    uri: './nowornever.jpg',
                }}
                    style={styles.cardImage}
                />
            </View>
            <View style={styles.cardBody}>
                <Text numberOfLines={2}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident reiciendis quam suscipit, magnam tenetur quas? Ullam magnam minima nesciunt deserunt.
                </Text>
            </View>
            <View style={styles.cardFooter}>
                <TouchableOpacity
                onPress={()=>openWebsite('https://reactnative.dev/')}
                >
                    <Text  style={styles.webLink}>Read More</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ActionCard

const styles = StyleSheet.create({
    headingText: {

    },
    card: {},
    elevatedCard: {},
    headingContainer: {},
    headerText: {},
    cardImage: { height: 100 },
    cardBody: {},
    cardFooter:{},
    webLink:{}

})