import { shopReducer } from "@/entities/shop/shopList/models/shopSlice";
import { shopApi } from "@/shared/api/base";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

const rootReducer = combineReducers({
  shop: shopReducer,
  [shopApi.reducerPath]: shopApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(shopApi.middleware),
  });
};

export const store = setupStore();

setupListeners(store.dispatch);
