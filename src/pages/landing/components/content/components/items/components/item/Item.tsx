import { useLocation } from 'react-router-dom';

import './Item.css';

import { ItemType } from '../../../../../../../../types';

type Props = {
  item: ItemType
}

export default function Item({ item }: Props) {
  const { pathname } = useLocation();
  
  return (
    <li className='item'>
      <a href={`${pathname}/${item.id}`}>
        <div className='item-photo'>
          <img 
            src={item.photos[0].src} 
            alt="item photo" 
            height={100} 
            width={100} 
          />
        </div>
        <p>{item.name}</p>
        <p>{item.price}</p>
        <p>{item.size.val}</p>
      </a>
    </li>
  );
}