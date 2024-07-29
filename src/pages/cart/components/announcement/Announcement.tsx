import './Announcement.css';

import { useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

import useLang from '../../../../hooks/useLang';
import { LangType } from '../../../../types';

export default function Announcement() {
  const lang = useLang() as LangType;
  
  const headerText = {
    am: 'Ուշադրություն',
    ru: 'Внимание'
  };
  const bodyText = {
    am: 'Երևանի տարածքում, 30,000 դրամ և ավել պատվերների դեպքում առաքումն անվճար է',
    ru: 'В Ереване, при заказах на сумму 30,000 драм и более доставка бесплатная'
  };
  
  const [isOpen, setIsOpen] = useState(true);

  const close = () => {
    setIsOpen(false);
  };
  
  return (
    <div className={`announcement ${isOpen ? '' : 'closed'}`}>
      <div className='top'>
        <p className='header'>{headerText[lang]}</p>
        <button className='close-btn' onClick={close}>
          <Icon icon='lucide:x' />
        </button>
      </div>
      <p className='body'>{bodyText[lang]}</p>
    </div>
  );
}