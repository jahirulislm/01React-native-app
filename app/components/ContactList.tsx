import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ContactList = () => {
    const contacts = [
        {
            uid: 1,
            name: 'Hitesh Choudhary',
            status: 'Just an extra ordinary teacher',
            imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
        },
        {
            uid: 2,
            name: 'Anurag Tiwari',
            status: 'I ❤️ To Code and Teach!',
            imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
        },
        {
            uid: 3,
            name: 'Sanket Singh',
            status: 'Making your GPay smooth',
            imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
        },
        {
            uid: 4,
            name: 'Anirudh Jwala',
            status: 'Building secure Digital banks',
            imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
        {
            uid: 5,
            name: 'Niraz khan',
            status: 'Building secure App',
            imageUrl: 'https://images.pexels.com/photos/2176593/pexels-photo-2176593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
    ];
    return (
        <View>
            <Text style={styles.headingText}>ContactList</Text>

            <ScrollView
                style={styles.container}
                scrollEnabled={false}
            >

                { // Inside map == use () not needed to return anything.
                    // using {} means return values
                    contacts.map(({ uid, name, status, imageUrl }) => (
                        <View key={uid} style={styles.userCard}>
                            <Image
                                source={{ uri: imageUrl }}
                                style={styles.userImage}
                            />
                            <View>
                                <Text style={styles.userName}>{name}</Text>
                                <Text style={styles.userStatus}>{status}</Text>
                            </View>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}

export default ContactList

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 12,
    },
    container: {
        width: 350,
        height: 360,
        borderRadius: 8,
        marginVertical: 12,
        marginHorizontal: 16,
        backgroundColor: '#f39c12'
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    userImage: {
        width: 60,
        height: 60,
        marginRight: 16,
        marginLeft: 24,
        marginTop:8,
    },
    userName: {
        fontSize:16,
        fontWeight:'600',
    },
    userStatus: {
        fontSize:14,
        fontWeight:'500'
    }
})