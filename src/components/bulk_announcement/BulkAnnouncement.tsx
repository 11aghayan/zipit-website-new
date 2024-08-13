import './BulkAnnouncement.css';

import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

import type { LangType } from '../../types';
import useLang from '../../hooks/useLang';
import Language from '../navbar/language/Language';


export default function BulkAnnouncement() {
  const lang = useLang() as LangType || 'am';
  const bulkInStorage = window.sessionStorage.getItem(`bulk-${lang}`);
  
  const [isOpen, setIsOpen] = useState(!bulkInStorage);

  useEffect(() => {
    if (!bulkInStorage) {
      window.sessionStorage.setItem(`bulk-${lang}`, 'true');
    }
  }, [])
  
  const text = {
    am: <div>Մեծաքանակ պատվերների դեպքում<br/> <a className='contacts' href={`/${lang}/contacts`}>կապ հաստատեք մեզ հետ</a></div>,
    ru: <div>В случае крупных заказов<br/> <a className='contacts' href={`/${lang}/contacts`}>свяжитесь с нами</a></div>
  }

  const header = {
    am: 'Ուշադրություն',
    ru: 'Внимание'
  };

  const handleClose = () => {
    setIsOpen(false);
  }
  
  return (
    <div className={`bulk-announcement ${isOpen ? 'open' : ''}`}>
      <div className='content'>
        <div className='top'>
          <p className='header'>{header[lang]}</p>
          <button onClick={handleClose} className='close-btn'>
            <Icon icon='material-symbols:close-rounded' />
          </button>
        </div>
        {text[lang]}
        <div className='lang-switch'>
          <Language />
        </div>
      </div>
    </div>
  );
}