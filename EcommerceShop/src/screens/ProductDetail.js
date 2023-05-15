import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../common/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import CustomButton from '../common/CustomButton';
import {useDispatch} from 'react-redux';
import {addItemToWishList} from '../redux/slices/WishlistSlice';
import {addItemToCart} from '../redux/slices/CartSlice';

const ProductDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  return (
    <View style={styles.container}>
      <Header
        leftIcon={require('../images/back.png')}
        rightIcon={require('../images/cart.png')}
        title={'Product Detail'}
        onClickLeftIcon={() => {
          navigation.goBack();
        }}
        isCart={true}
      />
      <ScrollView>
        <Image source={{uri: route.params.data.image}} style={styles.banner} />
        <Text style={styles.title}>{route.params.data.title}</Text>
        <Text style={[styles.title, styles.desc]}>
          {route.params.data.description}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.price, {color: '#000'}]}>Price</Text>
          <Text style={styles.price}>{'$' + route.params.data.price}</Text>
          <View style={styles.qtyView}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                if (qty > 1) {
                  setQty(qty - 1);
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
            <Text style={styles.qty}>{qty}</Text>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                setQty(qty + 1);
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
        <TouchableOpacity
          style={styles.wishlistBtn}
          onPress={() => {
            dispatch(addItemToWishList(route.params.data));
          }}>
          <Image
            source={require('../images/wishlist.png')}
            style={styles.icon}
          />
        </TouchableOpacity>

        <CustomButton
          bg={'#FF9A0C'}
          title={'Add To Cart'}
          color={'#fff'}
          onClick={() => {
            dispatch(
              addItemToCart({
                category: route.params.data.category,
                description: route.params.data.description,
                id: 1,
                image: route.params.data.image,
                price: route.params.data.price,
                qty: qty,
                rating: route.params.data.rating,
                title: route.params.data.title,
              }),
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  banner: {
    width: '100%',
    height: 300,
    resizeMode: 'center',
  },
  title: {
    fontSize: 22,
    color: '#000',
    fontWeight: '600',
    marginLeft: 20,
    marginTop: 20,
  },
  desc: {
    fontSize: 16,
    fontWeight: '400',
  },
  price: {
    color: 'green',
    marginLeft: 20,
    marginTop: 11,
    fontSize: 20,
    fontWeight: '800',
  },
  wishlistBtn: {
    position: 'absolute',
    right: 20,
    top: 110,
    backgroundColor: '#dddddd',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  icon: {
    width: 24,
    height: 24,
  },
  qtyView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    // padding: 5,
    width: 20,
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 0.5,
    marginLeft: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    fontWeight: '900',
  },
  qty: {
    fontSize: 18,
    marginTop: 10,
    marginLeft: 10,
  },
});
export default ProductDetail;
