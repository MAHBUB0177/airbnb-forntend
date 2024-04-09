'use client'
import React from 'react'

import { PersistGate } from 'reduxjs-toolkit-persist/integration/react'
import { Provider } from "react-redux";
import { persistor, store } from "@/redux/store";
const ReduxProvider = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        {children}
    </PersistGate>
    </Provider>
  )
}

export default ReduxProvider