import './CartPage.css';

import useCart from '../../hooks/useCart';
import Content from './components/content/Content';
import Header from './components/header/Header';

export default function CartPage() {
  const cartEmpty = useCart()[0].length < 1;
  
  return (
    <main className='cart-page'>
      <Header empty={cartEmpty} />
      { 
        cartEmpty
        ?
        null
        :
        <Content />
      }
    </main>
  );
}