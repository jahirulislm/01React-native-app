
import CartReducer from "./slices/CartSlice";
import ProductReducer from "./slices/ProductSlice"
 const {configureStore} = require("@reduxjs/toolkit")
import WishlistReducer from './slices/WishlistSlice';

export const store = configureStore({
    reducer: {
        product: ProductReducer,
        wishlist: WishlistReducer,
        cart: CartReducer,
        // address: AddressReducer,
        // order: OrderReducer,
      },
})