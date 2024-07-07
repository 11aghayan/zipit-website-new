import './Item.css';

import { useState } from 'react';

import type { CartItemType, LangType } from '../../../../../../types'; 
import CartItemPhoto from './components/cartItemPhoto/CartItemPhoto';
import sizeLangMap from '../../../../../../utils/sizeLangMap';
import useLang from '../../../../../../hooks/useLang';
import CartItemQty from './components/cartItemQty/CartItemQty';
import CartItemName from './components/cartItemName/CartItemName';
import CartItemSize from './components/cartItemSize/CartItemSize';
import CartItemColor from './components/cartItemColor/CartItemColor';
import CartItemPrice from './components/cartItemPrice/CartItemPrice';
import CartItemDelete from './components/cartItemDelete/CartItemDelete';

type Props = {
  deleteItem: (id: string) => void;
} & CartItemType;

export default function Item({ id, name, photo, price, qty: quantity, size, minOrder, deleteItem }: Props) {
  const [qty, setQty] = useState(quantity.toString());
  const lang = useLang() as LangType;
  const sizes = sizeLangMap;
  
  return (
    <div className='cart-item'>
      <section className='top'>
        <div className='left-col'>
          <CartItemPhoto src={photo.src} />
        </div>
        <div className='right-col'>
          <CartItemName name={name} />
          <CartItemSize value={size.value} unit={sizes[size.unit][lang]} />
          <CartItemColor color={photo.color} />
          <CartItemQty 
            id={id}
            qty={qty} 
            minOrder={minOrder} 
            setQty={setQty} 
          />
        </div>
      </section>
      <section className='bottom'>
        <CartItemPrice price={price} qty={parseInt(qty)} />
        <CartItemDelete deleteItem={deleteItem} id={id}  />
      </section>
    </div>
  );
}