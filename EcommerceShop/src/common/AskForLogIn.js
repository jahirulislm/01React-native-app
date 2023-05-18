import {Dimensions, Modal, StyleSheet, Text, View,TouchableOpacity, Image} from 'react-native';
import React from 'react';


const AskForLogIn = ({modalVisible, onClickLogin, onClickSignup,onClose}) => {
  return (
    <Modal visible={modalVisible} transparent>
      <View style={styles.modalView}>
        <View style={styles.mainView}>
          <TouchableOpacity style={[styles.btn,{marginTop:40}]} onPress={()=>{
            onClickLogin()
          }}>
            <Text style={styles.btnText}>{"Log in"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn,{marginBottom:20,marginTop:15}]} onPress={()=>{
            onClickSignup()
          }}>
            <Text style={styles.btnText}>{"Create Account"}</Text>
          </TouchableOpacity>
        <TouchableOpacity style={styles.closeIcon} onPress={()=>{
          onClose()
        }}>
          <Image style={styles.icon} source={require('../images/close.png')}/>
        </TouchableOpacity>
        </View>

      </View>
    </Modal>
  );
};

export default AskForLogIn;

const styles = StyleSheet.create({
  modalView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
    top: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainView: {
    backgroundColor: '#DDD',
    width: '90%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: '85%',
    height: 52,
    backgroundColor: 'purple',
    // marginTop: 20,
    borderRadius: 10,
    alignContent: 'center',
  },
  btnText:{
    fontSize:18,
    textAlign:'center',
    color:"#fff",
    fontWeight:'600',
    marginTop:10,
  },
  icon:{
    width:18,
    height:18,
  },
  closeIcon:{
    position:'absolute',
    top:12,
    right:20,
  }
});
