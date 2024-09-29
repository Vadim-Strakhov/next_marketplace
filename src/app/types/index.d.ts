declare type RootState = ReturnType<AppStore["getState"]>;
declare type AppDispatch = AppStore["dispatch"];
declare type AppStore = ReturnType<typeof setupStore>;
