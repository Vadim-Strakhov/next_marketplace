import { shopReducer } from "@/entities/shop/shopList/models/shopSlice";
import { shopApi } from "@/shared/api/base";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

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

export type AppStore = ReturnType<typeof setupStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];
