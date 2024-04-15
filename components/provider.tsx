'use client'
import React from 'react'

// import { PersistGate } from 'reduxjs-toolkit-persist/integration/react'
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistor, store } from "@/redux/store";
import ScroolToTop from './common/scroolToTop';
const ReduxProvider = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <Provider store={store}>
    <PersistGate loading={null}  persistor={persistor}>
        {children}
        <ScroolToTop/>
    </PersistGate>
    </Provider>
  )
}

export default ReduxProvider