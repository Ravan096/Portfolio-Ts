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
         state.cartitems.filter((item) => item.id !== action.payload);
      },
      calculatePrice: (state) => {
        let sum:number = 0;
  state.cartitems.forEach((i) => {
    console.log(i.price);
    if (!isNaN(i.price) && !isNaN(i.qty)) {
      sum += Number(i.price) * Number(i.qty);
    }
  });
  state.subtotal = +sum.toFixed(2);
  if (state.subtotal > 1000) {
    state.shippingCharges = 0;
  } else {
    state.shippingCharges = 200;
  }
  state.tax = Math.round(state.subtotal * 0.18);
  state.total = +(state.subtotal + state.tax + state.shippingCharges).toFixed(2);
      },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, addtocart,removeCartItem,calculatePrice} = cartReducer.actions

export default cartReducer.reducer