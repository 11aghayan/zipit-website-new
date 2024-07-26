import './Items.css';

import Item from './components/item/Item';
import useCart from '../../../../hooks/useCart';
import TotalPrice from './components/totalPrice/TotalPrice';
import ChangePage from '../changePage/ChangePage';
import useLang from '../../../../hooks/useLang';
import { LangType } from '../../../../types';
import formatPrice from '../../../../utils/formatPrice';
import DeliveryFee from './components/deliveryFee/DeliveryFee';
import ItemsPrice from './components/itemsPrice/ItemsPrice';

type Props = {
  onNextBtnClick: () => void;
}

export default function Items({ onNextBtnClick }: Props) {
  const lang = useLang() as LangType;
  const [items, setCart] = useCart();

  const itemsPrice = items.reduce((acc, item) => {
    return acc + item.price * item.qty * item.minOrder.qty;
  }, 0);
  
  const delivery = itemsPrice >= 30000 ? 0 : 1000;

  const totalPrice = formatPrice(itemsPrice + delivery) as string;

  const nextBtnText = {
    am: 'Հաստատել',
    ru: 'Потвердить'
  }

  const deleteItem = (id: string) => {
    setCart(prev => prev.filter(i => `${i.id}` !== id));
  };
  
  return (
    <div className='cart-items'>
      {
        items.map((item) => (
          <Item 
            key={item.id} 
            id={item.id}
            name={item.name}
            photo={item.photo}
            price={item.price}
            qty={item.qty}
            size={item.size}
            minOrder={item.minOrder}
            deleteItem={deleteItem}
          />
        ))
      }
      <ItemsPrice price={itemsPrice} />
      <DeliveryFee fee={formatPrice(delivery) as string} />
      <TotalPrice totalPrice={totalPrice} />
      <ChangePage text={nextBtnText[lang]} onClick={onNextBtnClick} colored />
    </div>
  );
}