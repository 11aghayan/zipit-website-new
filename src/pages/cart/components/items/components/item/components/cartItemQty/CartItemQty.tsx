import './CartItemQty.css';

import useCart from '../../../../../../../../hooks/useCart';
import useLang from '../../../../../../../../hooks/useLang';

import type { LangType, MinOrderType } from '../../../../../../../../types';
import minOrderUnit from '../../../../../../../../utils/minOrderUnit';

type Props = {
  id: string;
  qty: string;
  minOrder: MinOrderType;
  setQty: React.Dispatch<React.SetStateAction<string>>;
}

export default function CartItemQty({ qty, setQty, id, minOrder }: Props) {
  const lang = useLang() as LangType;
  const unit = minOrderUnit(lang, minOrder);
  const [, setCart] = useCart();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    const numValue = parseInt(value);
    if (numValue < 2) value = '1';
    setQty(value);
    setCart(prev => prev.map(i => i.id === id ? { ...i, qty: parseInt(value) } : i));
  }

  const label = {
    am: 'Քանակ',
    ru: 'Количество'
  };

  return (
    <div className='cart-item-elm cart-item-qty'>
      <p className='label'>
        {label[lang]}:
      </p>
      <input 
        type="number" 
        value={qty} 
        onChange={handleChange}
      />
      <p className='val_unit'>x {minOrder.qty} {unit}</p>
    </div>
  );
}