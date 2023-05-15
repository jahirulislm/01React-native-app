import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../common/Header';
import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {addProducts} from '../redux/slices/ProductSlice';
// import ProductDetail from './ProductDetail'
const H_screen = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProducts(json);
        json.map(item => {
          item.qty = 0;
        });
        dispatch(addProducts(json));
      });
  };
  return (
    <View style={styles.container}>
      <Header
        leftIcon={require('../images/menu.png')}
        rightIcon={require('../images/cart.png')}
        title={'Grocery App'}
        onClickLeftIcon={() => {
          navigation.openDrawer();
        }}
        isCart={true}
      />
      <FlatList
        data={products}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              activeOpacity={1}
              data={products}
              style={styles.productsItem}
              onPress={() => {
                navigation.navigate('ProductDetail', {data: item});
              }}>
              <Image source={{uri: item.image}} style={styles.itemImage} />
              <View>
                <Text style={styles.title}>
                  {item.title.length > 24
                    ? item.title.substring(0, 24) + '...'
                    : item.title}
                </Text>
                <Text style={styles.desc}>
                  {item.description.length > 40
                    ? item.description.substring(0, 40) + '...'
                    : item.description}
                </Text>
                <Text style={styles.price}>{'$' + item.price}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default H_screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productsItem: {
    width: Dimensions.get('window').width,
    height: 100,
    marginTop: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemImage: {
    width: 100,
    height: 100,
  },
  title: {
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
    marginTop: 20,
  },
});
