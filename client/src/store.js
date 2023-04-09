import { configureStore } from '@reduxjs/toolkit'
import app from './reducer/appSlice';
export const store = configureStore({
  reducer: {
    app
  },
})