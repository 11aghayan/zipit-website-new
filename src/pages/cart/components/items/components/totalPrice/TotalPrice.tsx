import './TotalPrice.css';

import useLang from '../../../../../../hooks/useLang';
import { LangType } from '../../../../../../types';

type Props = {
  totalPrice: string;
}

export default function TotalPrice({ totalPrice }: Props) {
  const lang = useLang() as LangType;
  
  const total = {
    am: 'Ընդամենը',
    ru: 'В итоге'
  }
  
  const dram = {
    am: 'դրամ',
    ru: 'Драм'
  }
  
  return (
    <div className='total-price'>
      <p className='label'>{total[lang]}:</p>
      <p className='value'>
        <span>{totalPrice}</span>
        <span>{dram[lang]}</span>
      </p>
    </div>
  );
}