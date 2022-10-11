import { configureStore, getDefaultMiddleware, Store } from "@reduxjs/toolkit";
import { api } from "./ApiRequest";

export const store = configureStore({
    reducer: {[api.reducerPath]: api.reducer},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware)
})

export type TypeRootState = ReturnType<typeof store.getState>