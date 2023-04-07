import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },


});

const FlatListBasics = () => {
    return (
        <View style={styles.container}>
                <ScrollView>
            {/* <VirtualizedScrollview> */}
                    <FlatList
                        data={[
                            { key: 'Devin' },
                            { key: 'Dan' },
                            { key: 'Dominic' },
                            { key: 'Jackson' },
                            { key: 'James' },
                            { key: 'Joel' },
                            { key: 'John' },
                            { key: 'Jillian' },
                            { key: 'Jimmy' },
                            { key: 'Julie' },
                        ]}
                        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                    />
            {/* </VirtualizedScrollview> */}
                </ScrollView>
        </View>
    );
};

export default FlatListBasics;