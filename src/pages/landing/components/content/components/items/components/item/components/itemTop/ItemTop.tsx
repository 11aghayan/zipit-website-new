import './ItemTop.css';

import ItemLeftSide from '../itemLeftSide/ItemLeftSide';
import ItemRightSide from '../itemRightSide/ItemRightSide';
import { ItemType } from '../../../../../../../../../../types';

type Props = {
  item: ItemType;
  selectedPhoto: string;
}

export default function ItemTop({ item, selectedPhoto }: Props) {

  return (
    <section className='item-top'>
      <ItemLeftSide selectedPhoto={selectedPhoto} />
      <ItemRightSide item={item} />
    </section>
  );
}