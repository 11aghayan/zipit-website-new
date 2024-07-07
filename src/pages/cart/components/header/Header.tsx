import './Header.css';

import useLang from '../../../../hooks/useLang';
import { LangType } from '../../../../types';

export default function Header() {
  const lang = useLang() as LangType;
  
  const header = {
    am: 'Զամբյուղ',
    ru: 'Корзина'
  };
  
  return (
    <h2 className='cart-page-header'>
      {header[lang]}
    </h2>
  );
}