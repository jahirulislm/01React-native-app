const { createSlice } = require("@reduxjs/toolkit");

const wishlistSlice = createSlice({
    name:'wishlist',
    initialState:{
        data:[]
    },
    reducers:{
        addItemToWishList(state, action){
            let tempData = state.data;
            tempData.push(action.payload);
            state.data = tempData
        }
    }
})

export const {addItemToWishList} = wishlistSlice.actions;
export default wishlistSlice.reducer;