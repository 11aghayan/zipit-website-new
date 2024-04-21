import './Items.css';

import { ItemType } from '../../../../../../types';
import Item from './components/item/Item';

type Props = {
  items: ItemType[];
}

export default function Items({ items }: Props) {

  return (
    <ul className='items'>
      {
        items.map(item => (
          <Item 
            key={item.id}
            item={item}
          />
        ))
      }
    </ul>
  );
}