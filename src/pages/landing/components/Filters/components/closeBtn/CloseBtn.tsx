import { Icon } from '@iconify/react/dist/iconify.js';
import './CloseBtn.css';

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CloseBtn({ isOpen, setIsOpen }: Props) {

  return (
    <button 
      className='filters-close-btn' 
      aria-label='close filters button'
      onClick={() => setIsOpen(!isOpen)}
    >
      <Icon icon='ic:round-arrow-back-ios-new' className='filters-close-btn--icon' />
    </button>
  );
}