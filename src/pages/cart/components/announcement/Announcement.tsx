import './Announcement.css';

import useLang from '../../../../hooks/useLang';
import { LangType } from '../../../../types';

export default function Announcement() {
  const lang = useLang() as LangType;
  
  const headerText = {
    am: 'Ուշադրություն',
    ru: 'Внимание'
  };

  const bodyText = {
    am: 'Երևանի տարածքում, 30,000 դրամ և ավել պատվերների դեպքում առաքումն անվճար է',
    ru: 'В Ереване, при заказах на сумму 30,000 драм и более доставка бесплатная'
  };

  const durationText = {
    am: 'Առաքումը կատարվում է 1-2 օրվա ընթացքում',
    ru: 'Доставка осуществляется в течение 1-2 дней'
  };
  
  return (
    <div className={'announcement'}>
      <div className='top'>
        <p className='header'>{headerText[lang]}</p>
        {/* <button className='close-btn' onClick={close}>
          <Icon icon='lucide:x' />
        </button> */}
      </div>
      <p className='body'>{bodyText[lang]}</p>
      <p className='bottom'>{durationText[lang]}</p>
    </div>
  );
}