import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import cartReducer from './cartRedux';
import userReducer from '../redux/userRedux';
import productReducer from '../redux/productRedux';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import AsyncStorage from '@react-native-community/async-storage';


// const persistConfig = {
//     key: 'root',
//     storage: AsyncStorage,
//      whitelist: [
//         'user'
//      ],
// };
   
// console.log(userReducer);

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};



const rootReducer = combineReducers({ user: userReducer, product: productReducer});

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});




export let persistor = persistStore(store);

// console.log(persistor);
  


