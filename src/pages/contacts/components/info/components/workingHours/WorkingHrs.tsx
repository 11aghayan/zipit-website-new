import './WorkingHrs.css';

import useLang from '../../../../../../hooks/useLang';
import { LangType } from '../../../../../../types';

export default function WorkingHrs() {
  const lang = useLang() as LangType;
  
  const langMap = {
    label: {
      am: 'Աշխ. ժամեր',
      ru: 'Рабочие часы'
    },
    value: lang === 'ru' ? 'Пн-Вс 10:00-18:00' : 'Երկ-Կիր 10:00-18:00'
  };

  
  return (
    <div className='working-hrs'>
      <p className='label'>{langMap.label[lang]}:</p>
      <p className='value'>{langMap.value}</p>
    </div>
  );
}