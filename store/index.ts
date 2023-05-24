import {configureStore} from "@reduxjs/toolkit"
import cartSlice from "./cart-slice"
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from 'redux-thunk'

const presistConfig = {
   key: 'cake-fairy-store',
   storage
}

const persistedCartReducer = persistReducer(presistConfig, cartSlice.reducer)

const store = configureStore({
   reducer: {
      cart: persistedCartReducer
   },
   middleware: [thunk]
})


export default store
export const persistor = persistStore(store)
