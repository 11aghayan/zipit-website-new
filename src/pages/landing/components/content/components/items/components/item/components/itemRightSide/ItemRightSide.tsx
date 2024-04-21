import './ItemRightSide.css';

import ItemName from '../itemName/ItemName';
import ItemPrice from '../itemPrice/ItemPrice';
import ItemSize from '../itemSize/ItemSize';
import { ItemType } from '../../../../../../../../../../types';

type Props = {
  item: ItemType;
}

export default function ItemRightSide({ item }: Props) {

  return (
    <section className='item-right-side'>
      <ItemName name={item.name} />
      <ItemSize size={item.size} />
      <ItemPrice price={item.price} promo={item.promo} />
    </section>
  );
}