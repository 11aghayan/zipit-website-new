import './Item.css';

import { ItemType } from '../../../../types';
import LeftSide from './components/leftSide/LeftSide';
import RightSide from './components/rightSide/RightSide';
import Suggestions from '../../../../components/suggestions/Suggestions';

type Props = {
  item: ItemType;
}

export default function Item({ item }: Props) {
  
  return (
    <article className='item-page--item'>
      <section className='main'>
        <LeftSide item={item} />
        <RightSide item={item} />
      </section>
      <Suggestions type='similar' />
    </article>
  );
}