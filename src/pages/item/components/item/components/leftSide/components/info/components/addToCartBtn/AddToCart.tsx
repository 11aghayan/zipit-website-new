import './AddToCart.css';

import { Icon } from '@iconify/react/dist/iconify.js';
import toast from 'react-hot-toast';

import useLang from '../../../../../../../../../../hooks/useLang';
import { CartItemType, LangType } from '../../../../../../../../../../types';
import { useState } from 'react';
import minOrderUnit from '../../../../../../../../../../utils/minOrderUnit';
import useCart from '../../../../../../../../../../hooks/useCart';

type Props = {
  isSizeAvailable: boolean;
  qty: string;
  setQty: React.Dispatch<React.SetStateAction<string>>;
} & Omit<CartItemType, 'qty'>;

export default function AddToCartBtn({ id, isSizeAvailable, name, photo, price, size, minOrder, qty, setQty }: Props) {
  const lang = useLang() as LangType;
  const unit = minOrderUnit(lang, minOrder);
  const [, setCart] = useCart();

  const [inputError, setInputError] = useState(false);

  const handleQtyInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputError(false);
    let value = e.target.value;
    const numValue = parseInt(value);
    if (numValue <= 0) value = '1';
    setQty(value);
  };

  const handleAddToCart = () => {
    const toastSuccessMsg = {
      am: 'Ավելացված է զամբյուղի մեջ',
      ru: 'Добавлено в корзину'
    };

    const toastFailMsg = {
      am: 'Քանակը նշված չէ',
      ru: 'Количество не указано'
    };
    
    if (!qty) {
      toast.error(toastFailMsg[lang]);
      setInputError(true)
      return;
    }

    setCart(prev => {
      const itemInCart = prev.find(i => i.id === id && i.photo.color === photo.color);

      if (itemInCart) {
        return prev.map(i => i.id === id ? { ...i, qty: i.qty + parseInt(qty) } : i);
      }
      
      return [...prev, { id, name, photo, price, size, minOrder, qty: parseInt(qty) }]
    });
    setQty('1');
    toast.success(toastSuccessMsg[lang])
  };
  
  const btnText = {
    am: 'Ավելացնել զամբյուղ',
    ru: 'Добавить в корзину'
  };

  const qtyText = {
    am: 'Քանակ',
    ru: 'Количество'
  };
  
  return (
    <div className='add_to_cart'>
      <div className='qty-wrapper'>
        <label htmlFor="qty">
          {qtyText[lang]} = {qty} x {minOrder.qty} {unit}
          </label>
        <input 
          className={inputError ? 'error' : ''}
          type="number" 
          value={qty}
          onChange={handleQtyInput}
          min={1}
          name='qty'
          id='qty'
          disabled={!isSizeAvailable}
        />
      </div>
      <button disabled={!isSizeAvailable} onClick={handleAddToCart}>
        <span>{btnText[lang]}</span>
        <Icon icon='ph:shopping-cart-simple-fill' fontSize='1.5rem' />
      </button>
    </div>
  );
}