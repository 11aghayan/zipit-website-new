import './CartCount.css';

import useCart from '../../../../hooks/useCart';

export default function CartCount() {
  const [cart] = useCart();
  const count = cart.length

  return (
    <div className='cart-count'>
      {count}
    </div>
  );
}