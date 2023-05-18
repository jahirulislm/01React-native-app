import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {forwardRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import CheckoutScreen from '../screens/CheckoutScreen';

const CheckOut = ({total, items}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.tab}>
        <Text>{`ITEM's : ${items}`}</Text>
        <Text style={{fontWeight: '600', fontSize: 18}}>
          {'Total $' + total}
        </Text>
      </View>
      <View style={styles.tab}>
        <TouchableOpacity
          style={styles.checkoutBtn}
          onPress={() => {
            navigation.navigate('CheckoutScreen');
          }}>
          <Text>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckOut;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    height: 70,
    width: Dimensions.get('window').width,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  tab: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkoutBtn: {
    width: '80%',
    height: '60%',
    backgroundColor: '#FF8605',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
