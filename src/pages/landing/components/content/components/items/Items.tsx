import { ItemType } from '../../../../../../types';
import Item from './components/item/Item';
import './Items.css';

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