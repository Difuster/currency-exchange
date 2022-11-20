import { configureStore } from '@reduxjs/toolkit';
import exchangeReducer from './exchangeSlice';
import modalReducer from './modalSlice';

export default configureStore({
  reducer: {
    exchange: exchangeReducer,
    modal: modalReducer,
  },
});
