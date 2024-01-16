import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./features/modeSlice";

const store = configureStore({
    reducer: {
        config: modeReducer,
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;