import './ItemQty.css';

import useLang from '../../../../../../../../../../hooks/useLang';
import { LangType } from '../../../../../../../../../../types';

type Props = {
  qty: number;
}

export default function Qty({ qty }: Props) {
  const lang = useLang() as LangType;

  const langMap = {
    am: 'Առկա քանակություն',
    ru: 'Доступное количество'
  };

  const unavailableLangMap = {
    am: 'Առկա չէ',
    ru: 'Нет в наличии'
  };

  const displayingQty = qty === 0 ? unavailableLangMap[lang] : qty;

  return (
    <p className={`qty ${qty === 0 ? 'unavailable' : ''}`}>
      <span className='label'>{langMap[lang]}:</span>
      <span className='value'>{displayingQty}</span>
    </p>
  );
}