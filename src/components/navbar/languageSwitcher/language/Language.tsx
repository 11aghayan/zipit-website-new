import { useLocation } from 'react-router-dom';
import useLang from '../../../../hooks/useLang';
import { LangType } from '../../../../types';
import './Language.css';
import Flag from './flag/Flag';

type Props = {
  lang: LangType;
}

export default function Language({ lang }: Props) {
  const pageLang = useLang();
  const path = useLocation().pathname.split('/');
  path[1] = lang;
  
  const langMap = {
    am: 'հայերեն',
    ru: 'русский'
  }; 
  
  const current = pageLang === lang;
  const url = path.join('/');
  
  return (
    <a href={url} className={`language ${current && 'disabled'}`}>
      <Flag lang={lang} />
      <p className='text'>{langMap[lang]}</p>
    </a>
  );
}