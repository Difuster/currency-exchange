import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Modal.css';
import { actions as modalActions } from '../slices/modalSlice.js';
import { selectModalStatus, selectModalType } from '../slices/modalSlice.js';
import { selectAllSymbols } from '../slices/exchangeSlice.js';

function Modal(props) {
  const dispatch = useDispatch();
  const modalStatus = useSelector(selectModalStatus);
  const symbols = useSelector(selectAllSymbols);
  const modalType = useSelector(selectModalType);

  const hideModal = () => {
    dispatch(modalActions.setModalStatus('hidden'));
  };

  const selectCurrency = (e) => {
    if (modalType === 'from') {
      props.props.handleCheckedSymbolFrom(e);
      hideModal();
    } else if (modalType === 'to') {
      props.props.handleCheckedSymbolTo(e);
      hideModal();
    }
  };

  return (
    <div style={{visibility: `${modalStatus}`}} className="Modal" >
      <div className="Modal-header">
        <h1>Выберите валюту:</h1>
        <button onClick={hideModal}>X</button>
      </div>
      <ul>
        {symbols.map((symbol) => {
          return (
            <li
              key={symbol.abbr}
              id={symbol.abbr}
              onClick={selectCurrency}
            >
              {symbol.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Modal;
