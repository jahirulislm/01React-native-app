import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../common/CustomButton';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const loginUser = () => {
    firestore()
      .collection('Users')
      // Filter results
      .where('email', '==', email)
      // .where('password','==', pass)
      .get()
      .then(querySnapshot => {
        console.log(querySnapshot.docs[0]);
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.signupTitle}>{'Log In'}</Text>
      <TextInput
        placeholder="Enter Email"
        style={styles.input}
        value={email}
        onChangeText={txt => {
          setEmail(txt);
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
      <CustomButton
        bg={'#E27800'}
        title={'Login'}
        color={'#fff'}
        onClick={() => {
          // loginUser();
        }}
      />

      <Text
        style={styles.loginTxt}
        onPress={() => {
          navigation.navigate('Signup');
        }}>
        {'Sign Up'}
      </Text>
    </View>
  );
};

export default Login;

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
