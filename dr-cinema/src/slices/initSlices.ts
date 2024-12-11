import { createSlice } from '@reduxjs/toolkit';
import 'dotenv/config';
import { setApiKey } from './apiKeySlice';


const base64userpass = btoa(`${process.env.API_NAME}:${process.env.API_PASS}`);

interface InitState {
  initialized: boolean;
}

const initialState: InitState = {
  initialized: false,
};

const initSlice = createSlice({
  name: 'init',
  initialState,
  reducers: {
    setInitialized: () => ({ initialized: true }),
  },
});

type AuthResponse = {
  data: {
    success: boolean;
    token: string;
    message: string;
  };
};

export const { setInitialized } = initSlice.actions;

export const initializeApp = () => async (dispatch: any) => {
  try {
    const response = await fetch('http://localhost:3000/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Basic ${base64userpass}`,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error ${response.status}: ${errorText}`);
    }

    const data: AuthResponse = await response.json();

    if (!data.data.success) {
      throw new Error(data.data.message);
    }

    dispatch(setApiKey(data.data.token));



    dispatch(setInitialized());
  } catch (error) {
    console.error('Error initializing app:', error);
  }
}

export default initSlice.reducer;