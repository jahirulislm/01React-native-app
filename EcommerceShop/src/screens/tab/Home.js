import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../common/Header';
import H_screen from '../H_screen';
import Search from './Search';
import Wishlist from './Wishlist';
import Notification from './Notification';
import User from './User';
// import { TouchableOpacity } from 'react-native-gesture-handler'

const Home = () => {
  const [selectedTab, setSelectedTab] = useState('0');
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      {/* <Header leftIcon={require('../images/menu.png')} rightIcon={require('../images/cart.png')}

        title={'Grocery App'}
      /> */}

      {selectedTab == 0 ? (
        <H_screen />
      ) : selectedTab == 1 ? (
        <Search />
      ) : selectedTab == 2 ? (
        <Wishlist />
      ) : selectedTab == 3 ? (
        <Notification />
      ) : (
        <User />
      )}
      {!isKeyboardVisible && (
        <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => {
              setSelectedTab(0);
            }}>
            <Image
              source={
                selectedTab == 0
                  ? require('../../images/home_fill.png')
                  : require('../../images/home.png')
              }
              style={styles.bottomTabImage}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => {
              setSelectedTab(1);
            }}>
            <Image
              source={require('../../images/search.png')}
              style={styles.bottomTabImage}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => {
              setSelectedTab(2);
            }}>
            <Image
              source={
                selectedTab == 2
                  ? require('../../images/wishlist_fill.png')
                  : require('../../images/wishlist.png')
              }
              style={styles.bottomTabImage}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => {
              setSelectedTab(3);
            }}>
            <Image
              source={
                selectedTab == 3
                  ? require('../../images/noti_fill.png')
                  : require('../../images/noti.png')
              }
              style={styles.bottomTabImage}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => {
              setSelectedTab(4);
            }}>
            <Image
              source={
                selectedTab == 4
                  ? require('../../images/user_fill.png')
                  : require('../../images/user.png')
              }
              style={styles.bottomTabImage}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  bottomTab: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomTabImage: {
    width: 24,
    height: 24,
  },
});

export default Home;
