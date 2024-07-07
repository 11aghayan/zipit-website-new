import './Items.css';

import Item from './components/item/Item';
import useCart from '../../../../hooks/useCart';
import TotalPrice from './components/totalPrice/TotalPrice';
import ChangePage from '../changePage/ChangePage';
import useLang from '../../../../hooks/useLang';
import { LangType } from '../../../../types';

type Props = {
  onNextBtnClick: () => void;
}

export default function Items({ onNextBtnClick }: Props) {
  const lang = useLang() as LangType;
  const [items, setCart] = useCart();

  const totalPrice = items.reduce((acc, item) => {
    return acc + item.price * item.qty;
  }, 0);

  const nextBtnText = {
    am: 'Հաստատել',
    ru: 'Потвердить'
  }

  const deleteItem = (id: string) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };
  
  return (
    <div className='cart-items'>
      {
        items.map((item, i) => (
          <Item 
            key={i} 
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
      <TotalPrice totalPrice={totalPrice} />
      <ChangePage text={nextBtnText[lang]} onClick={onNextBtnClick} colored />
    </div>
  );
}