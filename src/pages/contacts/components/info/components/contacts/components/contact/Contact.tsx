import { Icon } from '@iconify/react/dist/iconify.js';

import './Contact.css';


type Props = {
  contact: 'email' | 'phone' | 'whatsapp' | 'telegram' | 'viber';
}

export default function Contact({ contact }: Props) {

  const valueMap = {
    email: 'zipitmail@mail.com',
    phone: '+37412345678',
    whatsapp: '+37412345678',
    telegram: '+37412345678',
    viber: '+37412345678'
  }

  const hrefMap = {
    email: `mailto:${valueMap.email}`,
    phone: `tel:${valueMap.phone}`,
    whatsapp: `whatsapp://send?phone=${valueMap.whatsapp}`,
    telegram: `https://telegram.me/${valueMap.telegram}`,
    viber: `viber://chat?number=${valueMap.viber}`
  }

  const logoMap = {
    email: 'mdi:email',
    phone: 'mdi:phone',
    whatsapp: 'simple-icons:whatsapp',
    telegram: 'simple-icons:telegram',
    viber: 'simple-icons:viber'
  }

  const href = hrefMap[contact];
    
  return (
    <a href={href} className='contact' >
      <div className={`icon ${contact}`}>
        <Icon icon={logoMap[contact]} width={40} height={40} />
      </div>
      <p className="value">{valueMap[contact]}</p>
    </a>
  );
}