import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: localStorage.getItem("cart")?
  JSON.parse(localStorage.getItem("cart")):
  []
};

export const productSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      const existingProduct = state.cart.find((item) => item.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeProduct(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    increaseProduct(state, action) {
      const existingProduct = state.cart.find((item) => item.id === action.payload);
      if (existingProduct) {
        existingProduct.quantity++
      }
    },
    decreaseProduct(state, action) {
      const product = state.cart.find((item) => item.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity --;
      } else {
        state.cart = state.cart.filter((item) => item.id !== action.payload);
      }
    },
    clearCart(state) {
      state.cart = [];
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const { decreaseProduct, removeProduct, addProduct, increaseProduct, clearCart } = productSlice.actions;
export default productSlice.reducer;
