import './ItemColor.css';

import useLang from '../../../../../../../../../../hooks/useLang';
import { LangType } from '../../../../../../../../../../types';

type Props = {
  color: string;
}

export default function ItemColor({ color }: Props) {
  const lang = useLang() as LangType;
  
  const langMap = {
    am: 'Գույն',
    ru: 'Цвет'
  };

  return (
    <p className='item-color'>
      <span className='title'>{langMap[lang]}:</span>
      <span className='value'>{color}</span>
    </p>
  );
}