import './NoCategories.css';

import useLang from '../../../../../../../../hooks/useLang';
import { LangType } from '../../../../../../../../types';

export default function NoCategories() {
  const lang = useLang() as LangType;
  
  const langMap = {
    am: 'Կատեգորիաներ: 0',
    ru: 'Категории: 0'
  };

  return (
    <p className='no-categories'>
      {langMap[lang]}
    </p>
  );
}