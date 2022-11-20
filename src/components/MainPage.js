import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { actions as exchangeActions } from '../slices/exchangeSlice.js';
import {
  selectAmount, selectFromCurrency, selectToCurrency, selectDate, selectResult, selectSuccess,  selectPopularSymbols,
} from '../slices/exchangeSlice.js';
import { actions as modalActions } from '../slices/modalSlice.js';
import Modal from './Modal';
import '../App.css';
import './MainPage.css';
import rightArrow from '../assets/rigthArrow.png';

function MainPage() {
  const [inputValue, setInputValue] = useState('');
  const [err, setErr] = useState('');
  const { t } = useTranslation('translation', { keyPrefix: 'mainPage' });

  const state = {
    amount: useSelector(selectAmount),
    currency: {
      from: useSelector(selectFromCurrency),
      to: useSelector(selectToCurrency),
    },
    date: useSelector(selectDate),
    result: useSelector(selectResult),
    success: useSelector(selectSuccess),
    popularSymbols: useSelector(selectPopularSymbols),
  };

  const inputRef = useRef(null);
  const outputRef = useRef(null);
  const dispatch = useDispatch();

  const getCurrValue = () => {
    setErr('');
    setInputValue(inputRef.current.value);
  };

  const handleCheckedSymbolFrom = (e) => {
    dispatch(exchangeActions.setCurrencyFrom(e.target.id));
  };

  const handleCheckedSymbolTo = (e) => {
    dispatch(exchangeActions.setCurrencyTo(e.target.id));
  };

  const handleModal = (e) => {
    dispatch(modalActions.setModalType(e.target.id));
    dispatch(modalActions.setModalStatus('visible'));
  };

  const getRequest = async (value) => {
    const myHeaders = new Headers();
    myHeaders.append("apikey", "z5Kznz7TLbMGD7ARXDcIIITXkfif9YTU");

    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };

    const path = `https://api.apilayer.com/fixer/convert?to=${value.currency.to}&from=${value.currency.from}&amount=${inputValue}`

    await fetch(path, requestOptions)
      .then(response => response.text())
      .then((resp) => JSON.parse(resp))
      .then(result => {
        dispatch(exchangeActions.setResult(result));
      })
      .catch(error => console.log('error', error));
  };

  const handleExchange = (e) => {
    e.preventDefault();
    const amount = Number(inputValue);

    if(isNaN(amount) || amount <= 0) {
      console.log('error');
      setErr('Ведите количество');
      return;
    }
    getRequest(state);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [])

  useEffect(() => {
    outputRef.current.innerText = 0;
  }, [state.currency.from, state.currency.to, inputValue, state.currency.amount])

  return (
    <div className="Main">
      <div className="Wrapper">
        <div className="Main-forms">
          <div className="Main-formWrapper">
            <form onSubmit={handleExchange}>
              <label style={{fontSize: "24px"}}>
                {t('thereIs')}<br /><br />
                <input
                  type="text"
                  className="Main-input"
                  value={inputValue}
                  onChange={getCurrValue}
                  ref={inputRef}
                />
              </label>
            </form>
            <div style={{display: 'flex', flexWrap: 'no-wrap'}}>
              <p className="Main-checkedCurrency">{state.currency.from}</p>
              <ul className="MainPage-ul">
                  {state.popularSymbols.map((symbol) => {
                    return (
                      <li
                        key={symbol.abbr}
                        id={symbol.abbr}
                        onClick={handleCheckedSymbolFrom}
                      >
                        {symbol.abbr}
                      </li>
                    )})
                  }
                  <li
                    id="from"
                    onClick={handleModal}
                  >
                    ...
                  </li>
                </ul>
            </div>
            {err ? <p style={{color:"red"}}><b>{err}</b></p> : null}
          </div>
          <div className="Main-arrowImg">
            <img src={rightArrow} alt="Стрелка вправо" />
          </div>
          <div className="Main-formWrapper">
            <form onSubmit={handleExchange}>
              <div>
                <label style={{fontSize: "24px"}}>
                  {t('changeTo')}<br /><br />
                </label>
                <div className="Main-output">
                  <p ref={outputRef}>
                    {state.result > 0 ? Math.round(state.result, 2) : ' '}
                  </p>
                </div>
              </div>
              <div style={{display: 'flex', flexWrap: 'no-wrap'}}>
                <p className="Main-checkedCurrency">{state.currency.to}</p>
                <ul className="MainPage-ul">
                  {state.popularSymbols.map((symbol) => {
                    return (
                      <li
                        key={symbol.abbr}
                        id={symbol.abbr}
                        onClick={handleCheckedSymbolTo}
                      >
                        {symbol.abbr}
                      </li>
                    )})
                  }
                  <li
                    id="to"
                    onClick={handleModal}
                  >
                    ...
                  </li>
                </ul>
              </div>
              <input
                type="submit"
                className="Main-submit"
                value="Пересчитать"
              />
            </form>
          </div>
        </div>
      </div>
      <Modal props={{handleCheckedSymbolFrom, handleCheckedSymbolTo}} />
    </div>
  )
}

export default MainPage;
