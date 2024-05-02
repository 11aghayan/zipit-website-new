import './SortList.css'; 

import sortOptions from '../../../../../../utils/sortOptions';
import SortOption from './components/SortOption';

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sort({ isOpen, setIsOpen }: Props) {
  
  return (
    <div className={`sort-list-wrapper ${isOpen ? 'open' : ''}`}>
      <ul className={`sort-list ${isOpen ? 'open' : ''}`}>
        {
          sortOptions.map(option => (
            <SortOption 
              key={`${option.label}-${option.param}`}
              label={option.label}
              param={option.param}
              setIsOpen={setIsOpen}
            />
          ))
        }
      </ul>
    </div>
  );
}