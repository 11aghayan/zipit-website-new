import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import './Sort.css';

import { LangType } from '../../../../../../types';
import sortOptions from '../../../../../../utils/sortOptions';
import sortIcon from '../../../../../../assets/sort.svg';
import useLang from '../../../../../../hooks/useLang';
import SortList from '../sort/SortList';

export default function Sort() {
  const lang = useLang() as LangType;
  
  const [sp] = useSearchParams();
  const sortQuery = sp.get('sorting');
  const sort = (sortOptions.find(o => o.query === sortQuery))?.label[lang] || 'hay name_asc';
  
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <button 
      className='sort-btn'
      onClick={handleClick}
    >
      <img 
        src={sortIcon} 
        alt="sort-icon" 
        height={20} 
        width={20}
      />
      <div className='active'>
        <p className='active'>{sort}</p>
        <SortList isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </button>
  );
}