import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Main from './screens/Main';
import ProductDetail from './screens/ProductDetail';
import Cart from './screens/Cart';
import Signup from './screens/Signup';
import Login from './screens/Login';
import CheckoutScreen from './screens/CheckoutScreen';
import AdressesScreeen from './screens/AddressesScreeen';
import AddressesScreeen from './screens/AddressesScreeen';
import AddAdress from './screens/AddAdress';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CheckoutScreen"
          component={CheckoutScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddressesScreeen"
          component={AddressesScreeen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddAdress"
          component={AddAdress}
          options={{headerShown: false}}
        />
       
      </Stack.Navigator>
      {/* <Stack.Navigator>
                <Stack.Screen name='ProductDetail' component={ProductDetail} options={{ headerShown: false }} />

            </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
