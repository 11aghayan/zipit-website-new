import { useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

import './Sort.css';

import { LangType } from '../../../../../../types';
import useLang from '../../../../../../hooks/useLang';
import SortList from '../sort/SortList';

export default function Sort() {
  const lang = useLang() as LangType;
  
  const [isOpen, setIsOpen] = useState(false);

  const label = {
    am: 'Դասավորել ըստ',
    ru: 'Сортировать по'
  }

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <button 
      className='sort-btn'
      onClick={handleClick}
    >
      <Icon icon='ic:outline-sort' className='sort-icon' />
      <div className={`label ${isOpen ? 'open' : ''}`}>
        <p className='label'>{label[lang]}</p>
        <SortList isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </button>
  );
}