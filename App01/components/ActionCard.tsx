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
                {/* <Image source={{
                    uri: 'https://unsplash.com/photos/cM46FH1JHrs',
                }}
                    style={styles.cardImage}
                /> */}
                <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/react-native-e.appspot.com/o/b47b03a1e22e3f1fd884b5252de1e64a06a14126.png?alt=media&token=d636c423-3d94-440f-90c1-57c4de921641' }} style={styles.cardImage} />
            <View style={styles.cardBody}>
                <Text numberOfLines={2}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident reiciendis quam suscipit, magnam tenetur quas? Ullam magnam minima nesciunt deserunt.
                </Text>
            </View>
            <View style={styles.cardFooter}>
                <TouchableOpacity
                    onPress={() => openWebsite('https://reactnative.dev/')}
                >
                    <Text style={styles.webLink}>Read More</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => openWebsite('https://reactnative.dev/')}
                >
                    <Text style={styles.webLink}>Follow me</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}

export default ActionCard

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
    },
    elevatedCard: {
        backgroundColor: '#E07C24',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1,
        }
        , shadowColor: '#333',
        shadowOpacity: 0.3,
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '500',
    },
    cardImage: {
        height: 200
    },
    cardBody: {
        padding: 8,
    },
    cardFooter: {
        padding: 9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    webLink: {
        fontSize: 14,
        color: '#000',
        backgroundColor: '#fff',
        padding: 6,
        borderRadius:8,
    }

})