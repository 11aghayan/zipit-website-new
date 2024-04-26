import './ItemQty.css';

import useLang from '../../../../../../../../../../hooks/useLang';
import { LangType } from '../../../../../../../../../../types';

type Props = {
  qty: number;
}

export default function Qty({ qty }: Props) {
  const lang = useLang() as LangType;

  const langMap = {
    am: 'Քանակ',
    ru: 'Количество'
  };

  return (
    <p className='qty'>
      <span className='title'>{langMap[lang]}:</span>
      <span className='value'>{qty}</span>
    </p>
  );
}