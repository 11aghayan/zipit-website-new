import './Item.css';

import { ItemType } from '../../../../types';
import LeftSide from './components/leftSide/LeftSide';
import RightSide from './components/rightSide/RightSide';

type Props = {
  item: ItemType;
}

export default function Item({ item }: Props) {
  
  return (
    <article className='item-page--item'>
      <LeftSide item={item} />
      <RightSide item={item} />
    </article>
  );
}