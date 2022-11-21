import React from 'react';
import { useTranslation } from 'react-i18next';
import '../App.css';
import './Footer.css';

function Footer () {
  const { t } = useTranslation('translation', { keyPrefix: 'footer' });

  return (
    <div className="Footer">  
      <div className="Wrapper">
        <p>{t('designedBy')} <a href="https://github.com/Difuster">Difuster</a></p>
      </div>
    </div>
  )
}

export default Footer;
