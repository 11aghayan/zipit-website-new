import './ItemRightSide.css';

import ItemName from '../itemName/ItemName';
import ItemPrice from '../itemPrice/ItemPrice';
import ItemSize from '../itemSize/ItemSize';
import { ItemType, PhotoType } from '../../../../../../../../../../types';

type Props = {
  item: ItemType;
  selectedPhoto: PhotoType;
}

export default function ItemRightSide({ item, selectedPhoto }: Props) {

  return (
    <section className='item-right-side'>
      <ItemName name={item.name} />
      <ItemSize size={item.size} color={selectedPhoto.color} />
      <ItemPrice price={item.price} promo={item.promo} />
    </section>
  );
}