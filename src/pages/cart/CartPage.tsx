import './CartPage.css';

import useCart from '../../hooks/useCart';
import Content from './components/content/Content';
import Header from './components/header/Header';
import Announcement from './components/announcement/Announcement';
import ContinueShoppingButton from './components/continueShopping/ContinueShoppingButton';

export default function CartPage() {
  const cartEmpty = useCart()[0].length < 1;
  
  return (
    <main className='cart-page'>
      <Announcement />
      <Header empty={cartEmpty} />
      { 
        cartEmpty
        ?
        <ContinueShoppingButton />
        :
        <Content />
      }
    </main>
  );
}