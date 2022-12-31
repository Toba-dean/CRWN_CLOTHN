import { createSlice } from "@reduxjs/toolkit";


const UserSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null
  },
  reducers: {
    addUser: (state, { payload }) => {
      state.currentUser = payload
    }
  }
});

export const { addUser } = UserSlice.actions;
export const selectUser = ({ user }) => user.currentUser;

export default UserSlice.reducer;