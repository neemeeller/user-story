import React from 'react';
import { Slice, createSlice, configureStore } from '@reduxjs/toolkit';
import { Provider as ReduxProvider } from 'react-redux';

export const ProviderWrapper: React.FC<{ children?: JSX.Element | string }> = ({ children }) => {
  const userState: Slice = createSlice({
    name: 'user',
    initialState: {
      users: [],
    },
    reducers: {
      setWebAuthInited() {},
    },
  });

  const mockStore = configureStore({
    reducer: {
      user: userState.reducer,
    },
  });

  return <ReduxProvider store={mockStore}>{children}</ReduxProvider>;
};
