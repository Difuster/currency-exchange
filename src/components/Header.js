import React from 'react';
import { useTranslation } from 'react-i18next';
import '../App.css';
import './Header.css';

function Header () {
  const languages = ['RU', 'EN', 'DE'];
  const { i18n } = useTranslation();
  const { t } = useTranslation('translation', { keyPrefix: 'header' });

  const handleCurrLanguage = (e) => {
    const lng = e.target.innerText.toLowerCase();
    i18n.changeLanguage(lng);
  };

  return (
    <div className="Header">  
      <div className="Wrapper">
        <p className="Header-Title">{t('currencyExchange')}</p>
        <ul className="Header-lang">
          {
            languages.map((lng) => {
              return (<li key={lng} id={lng} onClick={handleCurrLanguage}>{lng}</li>)
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Header;
