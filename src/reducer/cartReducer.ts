import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import { CartItem, CartReducerInitialState } from '../types/types';


const initialState:CartReducerInitialState={
    cartitems:[],
    subtotal: 0,
    tax: 0,
    shippingCharges: 0,
    discount: 0,
    total: 0,
}

export const cartReducer = createSlice({
  name: 'cartReducer',
  initialState,
  reducers: {
    increment: (state,action:PayloadAction<string>) => {
       const index = state.cartitems.findIndex((item) => item.id === action.payload);
       if (index !== -1) {
         state.cartitems[index].qty++;
       }
    },
    decrement: (state,action:PayloadAction<string>) => {
      const index = state.cartitems.find((item) => item.id === action.payload);
      if(index!.qty >1){
          state.cartitems.forEach((i)=>{
              if(i.id===action.payload) i.qty -= 1;
          })
      }
    },
    addtocart:(state, action: PayloadAction<CartItem>) => {
       const index = state.cartitems.findIndex((item) => item.id === action.payload.id);
     
       if (index === -1) {
         state.cartitems.push(action.payload);
       }
       else {
         state.cartitems[index].qty++;
       }
      },
      removeCartItem: (state, action: PayloadAction<string>) => {
        const index = state.cartitems.find((item) => item.id === action.payload);
         state.cartitems.filter((item) => item.id !== action.payload);
      },
      calculatePrice: (state) => {
        let sum = 0;
        state.cartitems.forEach((i) => (sum += i.price * i.qty));
        state.subtotal = sum;
        state.shippingCharges = state.subtotal > 1000 ? 0 : 200;
        state.tax = +(state.subtotal * 0.18).toFixed();
        state.total = state.subtotal + state.tax + state.shippingCharges;
      },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, addtocart,removeCartItem,calculatePrice} = cartReducer.actions

export default cartReducer.reducer