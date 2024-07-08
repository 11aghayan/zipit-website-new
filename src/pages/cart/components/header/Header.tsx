import './Header.css';

import useLang from '../../../../hooks/useLang';
import { LangType } from '../../../../types';

type Props = {
  empty: boolean;
}

export default function Header({ empty }: Props) {
  const lang = useLang() as LangType;
  
  const header = {
    am: 'Զամբյուղ',
    ru: 'Корзина'
  };

  const emptyText = {
    am: 'Զամբյուղը դատարկ է',
    ru: 'Корзина пуста'
  };
  
  return (
    <h2 className={`cart-page-header ${empty ? 'empty' : ''}`}>
      {
        empty
        ?
        emptyText[lang]
        :
        header[lang]
      }
    </h2>
  );
}