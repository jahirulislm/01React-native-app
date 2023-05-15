import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Cart from '../screens/Cart';
const {height, width} = Dimensions.get('window');

const Header = ({
  title,
  leftIcon,
  rightIcon,
  onClickLeftIcon,
  onClickRightIcon,
  isCart,
}) => {
  const cartItem = useSelector(state => state.cart);
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onClickLeftIcon();
        }}>
        <Image source={leftIcon} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      {!isCart && <View></View>}
      {isCart && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Cart');
          }}>
          <Image
            source={rightIcon}
            style={[styles.icon, {width: 40, height: 40}]}
          />
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor: '#fff',
              borderRadius: 10,
              position: 'absolute',
              right: 0,
              top: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#000'}}>{cartItem.data.length}</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: width,
    height: 60,
    backgroundColor: '#0786DAFD',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingTop: 10,
  },
  button: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: '#fff',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
  },
});

export default Header;
