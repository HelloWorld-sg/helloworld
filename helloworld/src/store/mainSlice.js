import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialFirebaseState = {
  channels: [],
};

const firebaseSlice = createSlice({
  name: "firebaseState",
  initialState: initialFirebaseState,
  reducers: {
    setChannels(state, action) {
      state.channels = action.payload;
    },
  },
});

export const firebaseAction = firebaseSlice.actions;

const store = configureStore({
  reducer: {
    firebase: firebaseSlice.reducer,
  },
});

export default store;
