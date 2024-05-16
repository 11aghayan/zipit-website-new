import { Icon } from '@iconify/react/dist/iconify.js';

import './CloseBtn.css';

type Props = {
  onClick: () => void;
}

export default function CloseBtn({ onClick }: Props) {

  return (
    <button className='close-btn' onClick={onClick}>
      <Icon  
        icon='ic:round-close' 
        fontSize='3rem' 
        color='#cc3333' 
      />
    </button>
  );
}