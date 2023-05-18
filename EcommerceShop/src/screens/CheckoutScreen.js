import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../common/Header';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  addItemToCart,
  reduceItemFromCart,
  removeItemFromCart,
} from '../redux/slices/CartSlice';
import CustomButton from '../common/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CheckoutScreen = () => {
  const items = useSelector(state => state.cart);
  const [cartItems, setCartItems] = useState([]);
  const navigation = useNavigation();
  const [selectedMethod, setSelectedMethod] = useState(0);
  const isFocused = useIsFocused();
  const [selectedAddress, setSelectedAddress] = useState(
    'Please select an Address',
  );

  const dispatch = useDispatch();
  useEffect(() => {
    setCartItems(items.data);
  }, [items]);

  // calculating total
  const getTotal = () => {
    let total = 0;
    cartItems.map(item => {
      total = total + item.qty * item.price;
    });
    return total.toFixed(0);
  };

  useEffect(() => {
    getSelectedAddress();
  }, [isFocused]);
  const getSelectedAddress = async () => {
    setSelectedAddress(await AsyncStorage.getItem('MY_ADDRESS'));
  };
  return (
    <View style={styles.container}>
      {/* <ScrollView> */}
      <Header
        leftIcon={require('../images/back.png')}
        title={'Checkout'}
        onClickLeftIcon={() => {
          navigation.goBack();
        }}
      />

      <Text style={styles.title}>Added Items</Text>
      <View>
        <FlatList
          data={cartItems}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                activeOpacity={1}
                style={styles.productItem}
                onPress={() => {
                  navigation.navigate('ProductDetail', {data: item});
                }}>
                <Image source={{uri: item.image}} style={styles.itemImage} />
                <View>
                  <Text style={styles.name}>
                    {item.title.length > 25
                      ? item.title.substring(0, 25) + '...'
                      : item.title}
                  </Text>
                  <Text style={styles.desc}>
                    {item.description.length > 30
                      ? item.description.substring(0, 30) + '...'
                      : item.description}
                  </Text>
                  <View style={styles.qtyView}>
                    <Text style={styles.price}>{'$' + item.price}</Text>
                    <TouchableOpacity
                      style={styles.btn}
                      onPress={() => {
                        if (item.qty > 1) {
                          dispatch(reduceItemFromCart(item));
                        } else {
                          dispatch(removeItemFromCart(index));
                        }
                      }}>
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: 600,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        -
                      </Text>
                    </TouchableOpacity>
                    <Text style={styles.qty}>{item.qty}</Text>
                    <TouchableOpacity
                      style={styles.btn}
                      onPress={() => {
                        dispatch(addItemToCart(item));
                      }}>
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: 600,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        +
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={styles.totalView}>
        <Text style={styles.title}>Total</Text>
        <Text style={[styles.title, {color: 'green'}]}>{'$' + getTotal()}</Text>
      </View>
      <Text style={styles.title}>Select payment mode</Text>
      <TouchableOpacity
        style={styles.paymentBtn}
        onPress={() => {
          setSelectedMethod(0);
        }}>
        <Image
          source={
            selectedMethod == 0
              ? require('../images/radio_2.png')
              : require('../images/radio_1.png')
          }
          style={[
            styles.img,
            {tintColor: selectedMethod == 0 ? 'orange' : 'black'},
          ]}
        />
        <Text style={styles.paymentMethod}>Credit Card</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.paymentBtn}
        onPress={() => {
          setSelectedMethod(1);
        }}>
        <Image
          source={
            selectedMethod == 1
              ? require('../images/radio_2.png')
              : require('../images/radio_1.png')
          }
          style={[
            styles.img,
            {tintColor: selectedMethod == 1 ? 'orange' : 'black'},
          ]}
        />
        <Text style={styles.paymentMethod}>Debit Card</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.paymentBtn}
        onPress={() => {
          setSelectedMethod(2);
        }}>
        <Image
          source={
            selectedMethod == 2
              ? require('../images/radio_2.png')
              : require('../images/radio_1.png')
          }
          style={[
            styles.img,
            {tintColor: selectedMethod == 2 ? 'orange' : 'black'},
          ]}
        />
        <Text style={styles.paymentMethod}>UPI Card</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.paymentBtn}
        onPress={() => {
          setSelectedMethod(3);
        }}>
        <Image
          source={
            selectedMethod == 3
              ? require('../images/radio_2.png')
              : require('../images/radio_1.png')
          }
          style={[
            styles.img,
            {tintColor: selectedMethod == 3 ? 'orange' : 'black'},
          ]}
        />
        <Text style={styles.paymentMethod}>Bkash Payment</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.paymentBtn}
        onPress={() => {
          setSelectedMethod(4);
        }}>
        <Image
          source={
            selectedMethod == 4
              ? require('../images/radio_2.png')
              : require('../images/radio_1.png')
          }
          style={[
            styles.img,
            {tintColor: selectedMethod == 4 ? 'orange' : 'black'},
          ]}
        />
        <Text style={styles.paymentMethod}>Cash on Delivery</Text>
      </TouchableOpacity>
      <View style={styles.addressView}>
        <Text style={styles.title}>Address</Text>
        <Text
          style={[
            styles.title,
            {textDecorationLine: 'underline', color: 'blue'},
          ]}
          onPress={() => {
            navigation.navigate('AddressesScreeen');
          }}>
          Edit Address
        </Text>
      </View>
      <Text
        style={[styles.title, {marginTop: 10, fontSize: 16, color: '#636363'}]}>
        {selectedAddress}
      </Text>
      <CustomButton bg={'green'} title={'Payment'} color={'#fff'} />
      {/* </ScrollView> */}
    </View>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 18,
    marginLeft: 10,
    marginTop: 15,
    color: '#000',
  },
  productItem: {
    width: Dimensions.get('window').width,
    height: 100,
    marginTop: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
  },
  itemImage: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 20,
  },
  desc: {
    marginLeft: 20,
  },
  price: {
    color: 'green',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 20,
    marginTop: 5,
  },
  qtyView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  btn: {
    width: 20,
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 0.5,
    marginLeft: 15,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '900',
  },
  qty: {
    marginLeft: 10,
    fontSize: 18,
  },
  empty: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalView: {
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row',
    height: 50,
    borderBottomWidth: 0.4,
    borderBottomColor: '#B7B7B7',
    paddingBottom: 5,
  },
  paymentBtn: {
    flexDirection: 'row',
    width: '90%',
    marginTop: 10,
    paddingLeft: 20,
  },
  img: {
    width: 24,
    height: 24,
  },
  paymentMethod: {
    marginLeft: 20,
    fontSize: 16,
    color: '#000',
  },
  addressView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 20,
  },
});
