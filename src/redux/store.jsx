import { configureStore } from '@reduxjs/toolkit'
import cartSlice from "./slice/cartSlice.jsx";

export const store = configureStore({
    reducer: {
        cart:cartSlice
    },
})


export  default  store;