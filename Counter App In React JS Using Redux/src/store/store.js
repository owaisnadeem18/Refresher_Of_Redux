import { createStore } from "redux";
import { counterReducer } from "./Reducers/counter";
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

// To persist the value , you will be required to use redux persist in the main file of your store in react.js

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, counterReducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)    