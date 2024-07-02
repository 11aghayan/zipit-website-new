import './ItemAvailable.css';

import useLang from '../../../../../../../../../../hooks/useLang';
import { LangType } from '../../../../../../../../../../types';

type Props = {
  available: boolean;
}

export default function Availability({ available }: Props) {
  
  const lang = useLang() as LangType;
  
  const langMap = {
    am: 'Առկայություն',
    ru: 'Доступность'
  };
  
  const availabilityMap = {
    'true': {
      am: 'Առկա է',
      ru: 'B наличии'
    },
    'false': {
      am: 'Առկա չէ',
      ru: 'Нет в наличии'
    }
  };
  
  return (
    <p className={`qty ${!available ? 'unavailable' : ''}`}>
      <span className='label'>{langMap[lang]}:</span>
      <span className='value'>{availabilityMap[`${available}`][lang]}</span>
    </p>
  );
}