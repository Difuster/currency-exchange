import React from 'react';
import i18n from 'i18next';
import { initReactI18next, I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './slices/index';
import App from './App';
import resources from './locales/index.js';

const initApp = async () => {
  await i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: 'ru',
    });

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <I18nextProvider i18n={i18n}>
            <App />
          </I18nextProvider>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default initApp;
