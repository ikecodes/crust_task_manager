import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export interface User {
  username: string;
  isLoggedIn: boolean;
}
const initialUserState: User = {
  username: '',
  isLoggedIn: false, // Dont show the signup screen after @least one successful login
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setUser: (state, {payload}: PayloadAction<any>) => {
      state.username = payload.username ?? state.username;
      state.isLoggedIn = payload.isLoggedIn ?? state.isLoggedIn;
    },
    logOut: state => {
      state.username = '';
      state.isLoggedIn = false;
    },
  },
});

export const {setUser, logOut} = userSlice.actions;

export default userSlice;
