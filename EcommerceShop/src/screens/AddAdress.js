import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../common/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import CustomButton from '../common/CustomButton';
import {useDispatch} from 'react-redux';
import {addAddress, updateAddress} from '../redux/slices/AddressSlice';
import uuid from 'react-native-uuid';

const AddAddress = () => {
  const route = useRoute();
  const [type, setType] = useState(
    route.params.type == 'edit'
      ? route.params.data.type == 'Home'
        ? 1
        : 2
      : 1,
  );
  const navigation = useNavigation();
  const [state, setState] = useState(
    route.params.type == 'edit' ? route.params.data.state : 1,
  );
  const [city, setCity] = useState(
    route.params.type == 'edit' ? route.params.data.city : 1,
  );
  const [pincode, setPincode] = useState(
    route.params.type == 'edit' ? route.params.data.pincode : 1,
  );
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Header
        leftIcon={require('../images/back.png')}
        title={route.params.type == 'edit' ? 'edit Address' : 'Add New Address'}
        onClickLeftIcon={() => {
          navigation.goBack();
        }}
      />
      <TextInput
        value={state}
        onChangeText={txt => setState(txt)}
        placeholder="Enter State"
        style={styles.TextInput}
      />
      <TextInput
        value={city}
        onChangeText={txt => setCity(txt)}
        placeholder="Enter City"
        style={styles.TextInput}
      />
      <TextInput
        value={pincode}
        onChangeText={txt => setPincode(txt)}
        placeholder="Enter Pincode"
        style={styles.TextInput}
        keyboardType="number-pad"
      />
      <View style={styles.typeView}>
        <TouchableOpacity
          style={[
            styles.typeBtn,
            {borderWidth: 0.5, borderColor: type == 1 ? 'orange' : '#000'},
          ]}
          onPress={() => {
            setType(1);
          }}>
          <Image
            style={styles.radioBtn}
            source={
              type == 1
                ? require('../images/radio_2.png')
                : require('../images/radio_1.png')
            }
          />
          <Text style={{marginLeft: 20}}>{'Home'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.typeBtn,
            {borderWidth: 0.5, borderColor: type == 2 ? 'orange' : '#000'},
          ]}
          onPress={() => {
            setType(2);
          }}>
          <Image
            style={styles.radioBtn}
            source={
              type == 2
                ? require('../images/radio_2.png')
                : require('../images/radio_1.png')
            }
          />
          <Text style={{marginLeft: 20}}>{'Office'}</Text>
        </TouchableOpacity>
      </View>
      <CustomButton
        bg={'#FE9000'}
        title={'Save Adress'}
        color={'#fff'}
        onClick={() => {
          if (route.params.type == 'edit') {
            dispatch(
              updateAddress({
                state: state,
                city: city,
                pincode: pincode,
                type: type == 1 ? 'Home' : 'Office',
                id: route.params.data.id,
              }),
              navigation.goBack(),
            );
          } else {
            dispatch(
              addAddress({
                state: state,
                city: city,
                pincode: pincode,
                type: type == 1 ? 'Home' : 'Office',
                id: uuid.v4(),
              }),
              navigation.goBack(),
            );
          }
        }}
      />
    </View>
  );
};

export default AddAddress;

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
  TextInput: {
    width: '90%',
    height: 40,
    borderRadius: 10,
    borderWidth: 0.3,
    alignSelf: 'center',
    paddingLeft: 20,
    marginTop: 15,
  },
  typeView: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  typeBtn: {
    width: '40%',
    height: 40,
    borderRadius: 10,
    flexDirection: 'row',
    paddingLeft: 10,
    alignItems: 'center',
  },
  radioBtn: {
    width: 24,
    height: 24,
  },
});
