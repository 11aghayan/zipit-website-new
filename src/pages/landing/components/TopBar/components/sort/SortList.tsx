import './SortList.css'; 

import sortOptions from '../../../../../../utils/sortOptions';
import SortOption from './components/SortOption';
import { useSearchParams } from 'react-router-dom';

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sort({ isOpen, setIsOpen }: Props) {

  const [sp] = useSearchParams();
  const sortQuery = sp.get('sorting') || 'name,asc';
  
  const filteredOptions = sortOptions.filter(option => option.query !== sortQuery);
  
  return (
    <div className={`sort-list-wrapper ${isOpen ? 'open' : ''}`}>
      <ul className={`sort-list ${isOpen ? 'open' : ''}`}>
        {
          filteredOptions.map(option => (
            <SortOption 
              key={`${option.label}-${option.query}`}
              label={option.label}
              query={option.query}
              setIsOpen={setIsOpen}
            />
          ))
        }
      </ul>
    </div>
  );
}