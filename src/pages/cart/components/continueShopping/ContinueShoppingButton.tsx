import useLang from '../../../../hooks/useLang';
import { LangType } from '../../../../types';
import './ContinueShoppingButton.css';

export default function ContinueShoppingButton() {
  const lang = useLang() as LangType;
  
  const text = {
    am: 'Շարունակել գնումները',
    ru: 'Продолжить покупки'
  };
  
  return (
    <a href={`/${lang}`} className='continue-shopping-btn'>
      {text[lang]}
    </a>
  );
}