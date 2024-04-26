import { useLocation } from 'react-router-dom';

import './Language.css';

import useLang from '../../../hooks/useLang';
import Flag from './flag/Flag';

export default function Language() {
  const pageLang = useLang();
  const { pathname, search: sp } = useLocation();

  const lang = pageLang === 'am' ? 'ru' : 'am';

  const newPathname = pathname.split('/');
  newPathname[1] = lang;
  const url = newPathname.join('/') + sp;
  
  const langMap = {
    am: 'հայ',
    ru: 'рус'
  };
  
  return (
    <a href={url} className='language'>
      <Flag lang={lang} />
      <p className={`text ${lang === 'ru' ? 'ru' : ''}`}>{langMap[lang]}</p>
    </a>
  );
}