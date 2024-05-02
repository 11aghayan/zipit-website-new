import './NoItems.css';

import useLang from '../../../../../../../../hooks/useLang';
import { LangType } from '../../../../../../../../types';

export default function NoItems() {
  const lang = useLang() as LangType;

  const langMap = {
    am: 'ապրանքներ: 0',
    ru: 'товаров: 0'
  };
  
  return (
    <p className='no-items'>
      {langMap[lang]}
    </p>
  );
}