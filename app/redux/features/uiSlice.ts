// redux/features/uiSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// ====================
// UI STATE & SLICE
// ====================
interface UIState {
  language: string;
  isLoggedIn: boolean;
  mobileMenuOpen: boolean;
}

const uiInitialState: UIState = {
  language: 'ENGLISH (GLOBAL)',
  isLoggedIn: false,
  mobileMenuOpen: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: uiInitialState,
  reducers: {
    toggleMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

// ====================
// USER STATE & SLICE
// ====================
interface UserState {
  username: string;
  ucCoins: number;
  rpCoins: number;
  notifications: number;
}

const userInitialState: UserState = {
  username: 'Player_001',
  ucCoins: 385,
  rpCoins: 289,
  notifications: 3,
};

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    updateCoins: (state, action: PayloadAction<{ uc?: number; rp?: number }>) => {
      if (action.payload.uc !== undefined) state.ucCoins = action.payload.uc;
      if (action.payload.rp !== undefined) state.rpCoins = action.payload.rp;
    },
    addNotification: (state) => {
      state.notifications += 1;
    },
  },
});

// Export UI actions
export const { toggleMenu, setLanguage, login, logout } = uiSlice.actions;

// Export User actions
export const { updateCoins, addNotification } = userSlice.actions;

// Export reducers
export const uiReducer = uiSlice.reducer;
export const userReducer = userSlice.reducer;