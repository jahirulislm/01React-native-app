import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../common/CustomButton';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const Signup = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [pass, setPass] = useState('');
  const [confirmpass, setConfirmPass] = useState('');
  const addUser = () => {
    firestore()
      .collection('Users')
      .add({
        name: name,
        email: email,
        mobile: mobile,
        pass: pass,
      })
      .then(() => {
        console.log('User added!');
        navigation.navigate('Login')
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.signupTitle}>{'Sign Up'}</Text>
      <TextInput
        placeholder="Enter Name"
        style={styles.input}
        value={name}
        onChangeText={txt => {
          setName(txt);
        }}
      />
      <TextInput
        placeholder="Enter Email"
        style={styles.input}
        value={email}
        onChangeText={txt => {
          setEmail(txt);
        }}
      />
      <TextInput
        placeholder="Enter Mobile"
        style={styles.input}
        value={mobile}
        onChangeText={txt => {
          setMobile(txt);
        }}
      />
      <TextInput
        placeholder="Enter Password"
        style={styles.input}
        value={pass}
        onChangeText={txt => {
          setPass(txt);
        }}
      />
      <TextInput
        placeholder="Enter Confirm password"
        style={styles.input}
        value={confirmpass}
        onChangeText={txt => {
          setConfirmPass(txt);
        }}
      />
      <CustomButton
        bg={'#E27800'}
        title={'Sign up'}
        color={'#fff'}
        onClick={() => {
          // addUser();
        }}
      />
      <Text
        style={styles.loginTxt}
        onPress={() => {
          navigation.navigate('Login');
        }}>
        {'Log in'}
      </Text>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  signupTitle: {
    color: '#000',
    fontSize: 24,
    marginLeft: 40,
    marginTop: 50,
    fontWeight: '600',
  },
  input: {
    width: '85%',
    height: 40,
    borderRadius: 10,
    borderWidth: 0.5,
    paddingLeft: 20,
    marginTop: 15,
    marginLeft: 15,
    alignSelf: 'center',
  },
  loginTxt: {
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 18,
    textDecorationLine: 'underline',
    color: 'skyblue',
  },
});
