import { useLocation } from 'react-router-dom';

import './Item.css';

import { ItemType } from '../../../../../../../../types';
import ItemRightSide from './components/itemRightSide/ItemRightSide';
import ItemLeftSide from './components/itemLeftSide/ItemLeftSide';

type Props = {
  item: ItemType
}

export default function Item({ item }: Props) {
  const { pathname } = useLocation();
  
  return (
    <li className='item'>
      <a href={`${pathname}/${item.id}`}>
        <ItemLeftSide item={item} />
        <ItemRightSide item={item} />
      </a>
    </li>
  );
}