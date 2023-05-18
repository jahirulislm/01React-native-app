import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../common/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';

const User = () => {
  return (
    <View style={styles.container}>
      <Header title={"Profile"}
      />
      <Image  source={require('../../images/user_p.png')} style={styles.userProfile}/>
      <Text style={styles.name}>{"Jahir"}</Text>
      <Text style={[styles.name,{fontSize:18}]}>{"Jahir@gmail.com"}</Text>
      <TouchableOpacity style={[styles.tab,{marginTop:20}]}>
        <Text>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tab,{marginTop:10}]}>
        <Text>Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tab,{marginTop:10}]}>
        <Text>Address</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tab,{marginTop:10}]}>
        <Text>Payment methods</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tab,{marginTop:10}]}>
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  }, 
  userProfile:{
    width:100,
    height:100,
    alignSelf:'center',
    marginTop:50,
  },
  name:{
    alignSelf:'center',
    marginTop:10,
    fontSize:20,
    fontWeight:'600',
    color:"#000"
  },
  tab:{
    width:'90%',
    height:50,
    borderBottomWidth:0.4,
    alignSelf:'center',
    borderBottomColor:'#A0A0A0',
    paddingLeft:20,
    justifyContent:'center'
  }
});
