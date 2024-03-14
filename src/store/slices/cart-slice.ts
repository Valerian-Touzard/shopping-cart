import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../pages/home/home";

const initialState: any = []

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
    removeFromCart(state, action){
      return state.filter((item: Product) => item.id !== action.payload.id);
    }
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;