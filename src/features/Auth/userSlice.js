import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: ''
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.userName = action.payload.userName;
    },
    setUserLogout: (state) => {
      state.userName = '';
    }
  }
});

export const { setActiveUser, setUserLogout } = userSlice.actions;
export default userSlice.reducer;
