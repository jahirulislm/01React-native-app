import {StyleSheet, Text, View, TouchableOpacity, FlatList, Image} from 'react-native';
import React, {useEffect} from 'react';
import Header from '../common/Header';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { deleteAddress } from '../redux/slices/AddressSlice';

const AddressesScreeen = () => {
  const navigation = useNavigation();
  const addressList = useSelector(state => state.address);
  const isFocused = useIsFocused();
  const dispatch = useDispatch()
  useEffect(() => {
    console.log(addressList);
  }, [isFocused]);

  const defaultAddress = async (item) => {
    await AsyncStorage.setItem(
      'MY_ADDRESS',
      ' ' + item.state + ',' + item.city + ',' + item.pincode + ',' + item.type,
    );
    navigation.goBack()
  };
  return (
    <View style={styles.container}>
      <Header
        leftIcon={require('../images/back.png')}
        title={'My Address'}
        onClickLeftIcon={() => {
          navigation.goBack();
        }}
      />
      <FlatList
        data={addressList.data}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={{
                width: '90%',
                backgroundColor: '#fff',
                borderWidth: 0.5,
                paddingTop: 10,
                paddingLeft: 15,
                paddingBottom: 10,
                alignSelf: 'center',
                marginTop: 10,
                borderRadius: 10,
              }} onPress={()=>{
                defaultAddress(item)
              }}>
              <Text
                style={{
                  color: '#000',
                  fontSize: 16,
                }}>{`State: ${item.state}`}</Text>
              <Text
                style={{
                  color: '#000',
                  fontSize: 16,
                }}>{`State: ${item.city}`}</Text>
              <Text
                style={{
                  color: '#000',
                  fontSize: 16,
                }}>{`State: ${item.pincode}`}</Text>
              <Text
                style={{
                  color: '#000',
                  backgroundColor: '#818FF5',
                  borderRadius: 10,
                  fontSize: 10,
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  padding:4,
                  fontWeight:'600'
                }}>
                {item.type}
              </Text>
            <View style={styles.bottomView}>
              <TouchableOpacity style={{position:'absolute',right:10, bottom:0, flexDirection:'row'}} onPress={()=>{
                navigation.navigate("AddAdress",{
                  type:'edit',
                  data:item,
                })
              }}>
                <Image style={{width:20,height:20, marginRight:40}} source={require('../images/edit.png')}/>
              </TouchableOpacity>
              <TouchableOpacity style={{position:'absolute',right:10, bottom:0, flexDirection:'row'}} onPress={()=>{
                dispatch(deleteAddress(item.id))
              }}>
                <Image style={{width:20,height:20}} source={require('../images/delete.png')}/>
              </TouchableOpacity>
            </View>
            </TouchableOpacity>
          );
        }}
      />
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => {
          navigation.navigate('AddAdress', {type:'new'});
        }}>
        <Text style={{fontSize: 30, color: '#fff'}}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddressesScreeen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  addBtn: {
    width: 50,
    height: 50,
    backgroundColor: '#ECBA00',
    borderRadius: 10,
    position: 'absolute',
    bottom: 50,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

});
