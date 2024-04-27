import './ItemPrice.css';

import useLang from '../../../../../../../../../../hooks/useLang';
import { LangType } from '../../../../../../../../../../types';
import formatPrice from '../../../../../../../../../../utils/formatPrice';

type Props = {
  price: number;
  promo: number | null;
}

export default function ItemPrice({ price, promo }: Props) {
  const lang = useLang() as LangType;

  const langType = {
    am: 'Գին`',
    ru: 'Цена:'
  };

  const formattedPrice = formatPrice(price);
  const formattedPromo = formatPrice(promo);

  return (
    <div className={`item-price ${promo ? 'promo' : ''}`}>
      <p className='label'>{langType[lang]}</p>
      <div className='wrapper'>
        <p className='initial-price'>{formattedPrice}&#x58F;</p>
        {
          promo 
          ?
          <p className='promo-price'>{formattedPromo}&#x58F;</p>
          :
          null
        }
      </div>
    </div>
  );
}