import './Items.css';

import { ItemType } from '../../../../../../types';
import Item from './components/item/Item';
import NoItems from './components/noItems/NoItems';

type Props = {
  items: ItemType[];
}

export default function Items({ items }: Props) {

  const noItems = !items.length;
  
  return (
    <section className={`items ${noItems ? 'no-items' : ''}`}>
      {
        !noItems
        ?
        items.map(item => (
          <Item 
            key={item.id}
            item={item}
          />
        ))
        :
        <NoItems />
      }
    </section>
  );
}