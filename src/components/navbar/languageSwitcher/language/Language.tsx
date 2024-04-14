import useLang from '../../../../hooks/useLang';
import { LangType } from '../../../../types';
import './Language.css';
import Flag from './flag/Flag';
import useSp from '../../../../hooks/useSp';

type Props = {
  lang: LangType;
}

export default function Language({ lang }: Props) {
  const pageLang = useLang();
  const [sp] = useSp();

  const searchParams = new URLSearchParams(sp);
  const spString = Object.entries(sp).length ? `?${searchParams}` : '';
  
  const langMap = {
    am: 'հայերեն',
    ru: 'русский'
  }; 
  
  const current = pageLang === lang;
  const url = `/${lang}${spString}`;
  
  return (
    <a href={url} className={`language ${current && 'disabled'}`}>
      <Flag lang={lang} />
      <p className={`text ${lang === 'am' && 'arm'}`}>{langMap[lang]}</p>
    </a>
  );
}