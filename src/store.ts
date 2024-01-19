import {configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducer/cartReducer";

const store= configureStore({
    reducer:{
        cartReducer:cartReducer,
    }
}); 

export {store};
export type StoreType = ReturnType<typeof store.getState>