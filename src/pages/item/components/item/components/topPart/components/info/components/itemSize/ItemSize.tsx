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

  const unitLangMap = {
    mm: {
      am: 'մմ',
      ru: 'мм'
    },
    cm: {
      am: 'սմ',
      ru: 'см'
    },
    m: {
      am: 'մ',
      ru: 'м'
    }
  }

  return (
    <p className='item-size'>
      <span className='title'>{langMap[lang]}:</span>
      <span className='value'>{size.val}{unitLangMap[size.unit][lang]}</span>
    </p>
  );
}