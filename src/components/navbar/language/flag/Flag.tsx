import './Flag.css';

import am from '../../../../assets/flags/am.svg';
import ru from '../../../../assets/flags/ru.svg';
import { LangType } from '../../../../types';

type Props = {
  lang: LangType;
}

export default function Flag({ lang }: Props) {

  const src = lang === 'am' ? am : ru;
  const alt = lang === 'am' ? 'armenian flag' : 'russian flag';

  return (
    <img 
      src={src} 
      alt={alt}
      className='flag'
    />
  );
}