import './CartBtn.css';

import { Icon } from '@iconify/react/dist/iconify.js';
import { useLocation } from 'react-router-dom';

import useLang from '../../../hooks/useLang';
import CartCount from './cartCount/CartCount';

export default function CartBtn() {
  const lang = useLang();
  const isCartPage = (useLocation()).pathname.split('/')[2] === 'cart';
  
  if (isCartPage) return null;

  return (
    <a href={`/${lang}/cart`} className='cart-btn'>
      <Icon icon='ph:shopping-cart-simple-fill' />
      <CartCount />
    </a>
  );
}