import { Icon } from '@iconify/react/dist/iconify.js';

import './Contact.css';


type Props = {
  contact: 'email' | 'phone' | 'whatsapp' | 'telegram' | 'viber';
}

export default function Contact({ contact }: Props) {

  const valueMap = {
    email: 'zipitaccessories@gmail.com',
    phone: '+37495124838',
    whatsapp: '+37495124838',
    telegram: 'DrVach',
    viber: '+37495124838'
  }

  const hrefMap = {
    email: `mailto:${valueMap.email}`,
    phone: `tel:${valueMap.phone}`,
    whatsapp: `whatsapp://send?phone=${valueMap.whatsapp}`,
    telegram: `tg://resolve?domain=${valueMap.telegram}`,
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
  const icon = logoMap[contact];
  const value = contact === 'telegram' ? `@${valueMap[contact]}` : valueMap[contact];
  
  return (
    <a href={href} className='contact' aria-label={`${contact}-contact`} >
      <div className={`icon ${contact}`}>
        <Icon icon={icon} width={40} height={40} />
      </div>
      <p className="value">{value}</p>
    </a>
  );
}