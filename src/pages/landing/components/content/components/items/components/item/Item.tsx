import { ItemType } from '../../../../../../../../types';
import './Item.css';

type Props = {
  item: ItemType
}

export default function Item({ item }: Props) {
  
  return (
    <li className='item'>
      <img src={item.photos[0].src} alt="" height={100} width={100} />
      <p>{item.name}</p>
      <p>{item.price}</p>
      <p>{item.size.val}</p>
    </li>
  );
}