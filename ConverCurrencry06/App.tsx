import React from 'react'
import { SafeAreaView, Text, View , TextInput, ScrollView, StyleSheet, ImageBackground} from 'react-native'
// import  FlatList  from './components/FlatList'

function App() {
  return (
    
    <>
    {/* <ImageBackground source={'https://www.pexels.com/photo/yellow-cosmos-flower-close-up-photography-1212487/'} style={{width: '100%', height: '100%'}}> */}
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>Convert Your Currency to Other Currency:</Text>
        <TextInput
        style={{
          // width:'100%',
          // height: 40,
          // marginTop:80,
          borderColor: 'black',
          borderWidth: 1,
        }}
        defaultValue="Name me!"
      />
      {/* <ScrollView>
      <FlatList />
      </ScrollView> */}
      </View>
    </SafeAreaView>
    {/* </ImageBackground> */}
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    // width:'100%',
    // flex:1,
    // alignItems:'center',
    // justifyContent:'center'
  },
  text:{
    fontSize:24,
    color:'red',
    textAlign:'center',
    padding:20,
  }
})