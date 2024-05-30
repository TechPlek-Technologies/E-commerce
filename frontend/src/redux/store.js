import { configureStore, combineReducers } from '@reduxjs/toolkit';
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
import { settingsReducer } from './slice/settings-slice';
// import productReducer from './slices/productSlice'; // Uncomment if you have a product slice

const persistConfig = {
    key: "e-commerce",
    version: 1,
    storage,
    blacklist: ["product"], // Ensure this is accurate if you have other slices to blacklist
};

const rootReducer = combineReducers({
    settings: settingsReducer,
    // product: productReducer, // Uncomment if you have a product slice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor = persistStore(store);
