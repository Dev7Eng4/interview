import { createSlice } from '@reduxjs/toolkit';

interface Loading {
  [key: string]: boolean;
}

interface RequestState {
  loading: Loading;
}

const initialState: RequestState = {
  loading: {
    main: false,
  },
};

export const requestSlice = createSlice({
  name: 'request',
  initialState,
  reducers: {
    updateLoading: (state, action) => {
      state.loading = { ...action.payload };
    },
  },
});

export const { updateLoading } = requestSlice.actions;

export default requestSlice.reducer;
