import { useState } from 'react';
import Chevron from '../../chevron/Chevron';
import './LanguageSwitcher.css';
import Language from './language/Language';
import useLang from '../../../hooks/useLang';
import { LangType } from '../../../types';


export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const chevronDir = isOpen ? 'up' : 'down';

  const lang = useLang() as LangType;
  const secondLanguage = lang === 'am' ? 'ru' : 'am';

  const onClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <ul className={`language-switcher ${isOpen && 'open'}`} >
      <li 
        className='language-switcher--item'
        onClick={onClick}
      >
        <Language lang={lang} />
        <Chevron direction={chevronDir} />
      </li>
      <div className='language-list-wrapper'>
        <div className='language-list'>
          <li className='language-switcher--item'>
            <Language lang={secondLanguage} />
          </li>
        </div>
      </div>
    </ul>
  );
}