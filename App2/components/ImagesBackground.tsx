import React from 'react';
import {FlatList, ImageBackground, StyleSheet, Text, View} from 'react-native';

const image = {uri: 'https://reactjs.org/logo-og.png'};
function ImagesBackground() {
  return (
    <View style={styls.container}>
      <ImageBackground source={image} resizeMode="cover" style={styls.images}>
        <Text style={styls.text}>Insider image</Text>
      </ImageBackground>
    </View>
  );
}

const styls = StyleSheet.create({
  container: {
    flex: 1,
  },
  images: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

export default ImagesBackground;
