import { configureStore } from "@reduxjs/toolkit";
import orderReducer from './slices/orderSlice';
import cartReducer from './slices/cartSlice'

export const store = configureStore({
    reducer:{
        order: orderReducer,
        cart: cartReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;