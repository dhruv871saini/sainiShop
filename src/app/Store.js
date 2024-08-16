import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "../feature/productslice"
import themeReducer from "../feature/themeslice"

const store = configureStore({
    reducer :{
        cart:cartReducer,
        theme: themeReducer,
    }
})
export default store;