import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: number;
  nickname: string;
  email: string;
  password: string;
  subscription: 'none' | 'basic' | 'pro';
}
interface LoginData {
  email: string;
  password: string;
}
interface RegisterData {
  nickname: string;
  email: string;
  password: string;
  rememberMe: boolean;
}
interface AuthState {
  users: User[];
  currentUser: User | null;
  isAuth: boolean;
}

const initialState: AuthState = {
  users: [],
  currentUser: null,
  isAuth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    register: (state, action: PayloadAction<RegisterData>) => {
      const existingUser = state.users.find((user) => user.email === action.payload.email);

      if (!existingUser) {
        const newUser: User = {
          id: Date.now(),
          nickname: action.payload.nickname,
          email: action.payload.email,
          password: action.payload.password,
          subscription: 'none',
        };

        state.users.push(newUser);
        state.currentUser = newUser;
        state.isAuth = true;
      }
    },

    login: (state, action: PayloadAction<LoginData>) => {
      const existingUser = state.users.find((user) => user.email === action.payload.email);
      if (
        existingUser &&
        existingUser.email === action.payload.email &&
        existingUser.password === action.payload.password
      ) {
        state.currentUser = existingUser;
        state.isAuth = true;
      }
    },

    logout: (state) => {
      state.currentUser = null;
      state.isAuth = false;
    },
  },
});

export default authSlice.reducer;
export const { register, login, logout } = authSlice.actions;
