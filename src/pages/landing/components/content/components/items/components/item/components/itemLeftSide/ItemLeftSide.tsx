import ItemPhoto from '../itemPhoto/ItemPhoto';
import { ItemType } from '../../../../../../../../../../types';

type Props = {
  item: ItemType;
}

export default function ItemLeftSide({ item }: Props) {

  return (
    <section className='item-left-side'>
      <ItemPhoto photos={item.photos} />
    </section>
  );
}