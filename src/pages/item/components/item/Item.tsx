import './Item.css';

import { ItemType } from '../../../../types';
import TopPart from './components/topPart/TopPart';

type Props = {
  item: ItemType;
}

export default function Item({ item }: Props) {
  
  return (
    <article className='item-page'>
      <TopPart item={item} />
    </article>
  );
}