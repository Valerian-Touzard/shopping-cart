import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cart-slice';

interface RootState {
    cart: any; // Définissez un type approprié pour votre état de panier
  }

const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
})

export default store

export type AppDispatch = typeof store.dispatch;
export type RootStateStore = ReturnType<typeof store.getState>;