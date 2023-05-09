import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// navigation
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"


// import screen
import Home from './screen/Home'
import Details from './screen/Details'



// creating types
export type RootStackParamList = {
  Home: undefined;
  Details: {product: Product;}
}

const Stack = createNativeStackNavigator<RootStackParamList>()


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            title: "Trending products"
          }}
        />
        <Stack.Screen
          name='Details'
          component={Details}
          options={{
            title: "Product details"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

