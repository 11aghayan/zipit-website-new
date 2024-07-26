import './ItemsPrice.css';

import useLang from '../../../../../../hooks/useLang';
import { LangType } from '../../../../../../types';
import formatPrice from '../../../../../../utils/formatPrice';

type Props = {
  price: number;
}

export default function ItemsPrice({ price }: Props) {
  const lang = useLang() as LangType;

  const formattedPrice = formatPrice(price);
  
  const label = {
    am: 'Արժեքը',
    ru: 'Сумма'
  };

  const currency = {
    am: 'դրամ',
    ru: 'драм'
  };
  
  return (
    <p className='items-price'>
      <span className='label'>{label[lang]}: </span>
      <span className='value'>{formattedPrice} {currency[lang]}</span>
    </p>
  );
}