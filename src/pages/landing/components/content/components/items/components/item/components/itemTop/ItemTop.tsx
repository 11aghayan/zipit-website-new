import './ItemTop.css';

import ItemLeftSide from '../itemLeftSide/ItemLeftSide';
import ItemRightSide from '../itemRightSide/ItemRightSide';
import { ItemType, PhotoType } from '../../../../../../../../../../types';

type Props = {
  item: ItemType;
  selectedPhoto: PhotoType;
}

export default function ItemTop({ item, selectedPhoto }: Props) {

  return (
    <section className='item-top'>
      <ItemLeftSide selectedPhoto={selectedPhoto} />
      <ItemRightSide item={item} />
    </section>
  );
}