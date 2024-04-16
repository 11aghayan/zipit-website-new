import useLang from '../../../hooks/useLang';
import './Language.css';
import Flag from './flag/Flag';
import useSp from '../../../hooks/useSp';

export default function Language() {
  const pageLang = useLang();
  const [sp] = useSp();

  const searchParams = new URLSearchParams(sp);
  const spString = Object.entries(sp).length ? `?${searchParams}` : '';
  
  const langMap = {
    am: 'հայ',
    ru: 'рус'
  };

  const lang = pageLang === 'am' ? 'ru' : 'am';

  const url = `/${lang}${spString}`;
  
  return (
    <a href={url} className='language'>
      <Flag lang={lang} />
      <p className={`text ${lang === 'ru' ? 'ru' : ''}`}>{langMap[lang]}</p>
    </a>
  );
}