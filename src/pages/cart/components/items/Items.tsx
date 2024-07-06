import './Items.css';

import Item from './component/item/Item';
import useCart from '../../../../hooks/useCart';

export default function Items() {
  const [items] = useCart();
  
  return (
    <div className='cart-item'>
      {
        items.length 
        ?
        items.map((_val, i) => (
          <Item 
            key={i} 
          />
        ))
        : 
        <p>No Items</p>
      }
    </div>
  );
}