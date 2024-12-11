import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ApiKeyState {
  apiKey: string;
  timestamp: number;
}

const initialState: ApiKeyState = {
  apiKey: '',
  timestamp: 0,
};

const apiKeySlice = createSlice({
  name: 'apiKey',
  initialState,
  reducers: {
    setApiKey(state, action: PayloadAction<string>) {
      state.apiKey = action.payload;
      state.timestamp = Date.now();
    },
  },
});

export const { setApiKey } = apiKeySlice.actions;

export default apiKeySlice.reducer;