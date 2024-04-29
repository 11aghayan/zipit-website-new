import './Address.css';

import useLang from '../../../../../../hooks/useLang';
import { LangType } from '../../../../../../types';

export default function Address() {
  const lang = useLang() as LangType;
  
  const langMap = {
    label: {
      am: 'Հասցե',
      ru: 'Адрес'
    },
    value: lang === 'ru' ? 'g. Erevan, Vardanants 1' : 'q. Yerevan, Vardanants 1'
  };

  
  return (
    <div className='address'>
      <p className='label'>{langMap.label[lang]}:</p>
      <p className='value'>{langMap.value}</p>
    </div>
  );
}