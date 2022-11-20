import { createSlice } from '@reduxjs/toolkit';
import { allSymbols } from './allSymbols';

const getDate = () => {
  const date = new Date();
  return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
}

const initialState = {
  amount: 0,
  currency: {
    from: 'USD',
    to: 'RUB',
  },
  date: getDate(),
  result: '',
  success: false,
  popularSymbols: [
    {
      name: "Russian Ruble",
      abbr: "RUB",
    },
    {
      name: "United States Dollar",
      abbr: "USD",
    },
    {
      name: "Euro",
      abbr: "EUR",
    },
  ],
  symbols: allSymbols,
};
/* eslint-disable no-param-reassign */
const exchangeSlice = createSlice({
  name: 'exchange',
  initialState,
  reducers: {
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
    setCurrencyFrom: (state, action) => {
      state.currency.from = action.payload;
    },
    setCurrencyTo: (state, action) => {
      state.currency.to = action.payload;
    },
    setResult: (state, action) => {
      state.amount = action.payload.query.amount;
      state.result = action.payload.result;
      state.success = action.payload.success;
    }
  }
});
/* eslint-enable no-param-reassign */
const selectAmount = (state) => state.exchange.amount;
const selectFromCurrency = (state) => state.exchange.currency.from;
const selectToCurrency = (state) => state.exchange.currency.to;
const selectDate = (state) => state.exchange.date;
const selectResult = (state) => state.exchange.result;
const selectSuccess = (state) => state.exchange.success;
const selectPopularSymbols = (state) => state.exchange.popularSymbols;
const selectAllSymbols = (state) => state.exchange.symbols;

export const { actions } = exchangeSlice;
export {
  selectAmount, selectFromCurrency, selectToCurrency, selectDate, selectResult, selectSuccess,  selectPopularSymbols, selectAllSymbols,
};

export default exchangeSlice.reducer;
