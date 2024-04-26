import './ItemSize.css';

import useLang from '../../../../../../../../../../hooks/useLang';
import { LangType, SizeType } from '../../../../../../../../../../types';


type Props = {
  size: SizeType;
}

export default function ItemSize({ size }: Props) {
  const lang = useLang() as LangType;

  const langMap = {
    am: 'Չափս',
    ru: 'Размер'
  };

  return (
    <p className='item-size'>
      <span className='title'>{langMap[lang]}:</span>
      <span className='value'>{size.val}{size.unit}</span>
    </p>
  );
}