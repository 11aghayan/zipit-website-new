import { LangType } from '../../../../types';
import './Language.css';
import Flag from './flag/Flag';

type Props = {
  lang: LangType;
}

export default function Language({ lang }: Props) {
  const langMap = {
    am: 'հայերեն',
    ru: 'русский'
  }; 

  return (
    <a href='#' className='language'>
      <Flag lang={lang} />
      <p className='text'>{langMap[lang]}</p>
    </a>
  );
}