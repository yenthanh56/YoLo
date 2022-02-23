import { configureStore } from "@reduxjs/toolkit";
import productModalSlice from "./product-modal/productModalSlice";
import cartItem from "./ShoppingCart/cartItem";
export const store = configureStore({
    reducer: {
        productModal: productModalSlice,
        CartItem: cartItem,
    },
});