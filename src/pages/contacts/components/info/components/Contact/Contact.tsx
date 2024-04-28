import './Contact.css';

import useLang from '../../../../../../hooks/useLang';
import { LangType } from '../../../../../../types';

type Props = {
  contact: 'address' | 'email' | 'phone';
}

export default function Contact({ contact }: Props) {
  const lang = useLang() as LangType;
  
  const langMap = {
    address: {
      label: {
        am: 'Հասցե',
        ru: 'Адрес'
      },
      value: lang === 'ru' ? 'g. Erevan, Vardanants 1' : 'q. Yerevan, Vardanants 1'
    },
    email: {
      label: {
        am: 'Էլ. փոստ',
        ru: 'Эл. почта'
      },
      value: 'zipitmail@mail.com'
    },
    phone: {
      label: {
        am: 'Հեռ',
        ru: 'тел'
      },
      value: '(+374 123) 456 789'
    }
  };

  
  return (
    <div className='contact'>
      <p className='label'>{langMap[contact].label[lang]}:</p>
      <p className='value'>{langMap[contact].value}</p>
    </div>
  );
}