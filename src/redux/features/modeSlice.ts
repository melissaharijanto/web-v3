import { createSlice } from "@reduxjs/toolkit";

export type Mode = "LIGHT" | "DARK";

interface InitialState {
    mode: Mode;
}

const initialState: InitialState = {
    mode: "LIGHT",
}

export const modeSlice = createSlice({
  name: "mode",
  initialState: initialState,
  reducers: {
    switchToDarkMode: (state) => {
        state.mode = "DARK"
    },
   switchToLightMode: (state) => {
        state.mode = "LIGHT"
   }
  },
});

// Action creators are generated for each case reducer function
export const { switchToDarkMode, switchToLightMode } =
  modeSlice.actions;
// You must export the reducer as follows for it to be able to be read by the store.
export default modeSlice.reducer;