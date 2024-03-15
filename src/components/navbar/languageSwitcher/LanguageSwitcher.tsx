import { useState } from 'react';
import Chevron from '../../chevron/Chevron';
import './LanguageSwitcher.css';
import Language from './language/Language';


export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const chevronDir = isOpen ? 'up' : 'down';

  const onClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <ul className={`language-switcher ${isOpen && 'open'}`} >
      <li 
        className='language-switcher--item'
        onClick={onClick}
      >
        <Language lang='am' />
        <Chevron direction={chevronDir} />
      </li>
      <div className='language-list-wrapper'>
        <div className='language-list'>
          <li className='language-switcher--item'>
            <Language lang='ru' />
          </li>
        </div>
      </div>
    </ul>
  );
}