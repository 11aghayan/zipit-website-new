import './Contact.css';

import toast from 'react-hot-toast';
import { useState } from 'react';

import ChangePage from '../changePage/ChangePage'
import useLang from '../../../../hooks/useLang';
import type { LangType } from '../../../../types';
import useCart from '../../../../hooks/useCart';
import sizeLangMap from '../../../../utils/sizeLangMap';
import minOrderUnit from '../../../../utils/minOrderUnit';
import formatPrice from '../../../../utils/formatPrice';
import SubmitBtn from './components/submitBtn/SubmitBtn';
import ContactForm from './components/contactForm/ContactForm';

type Props = {
  onBack: () => void;
}

export default function Contact({ onBack }: Props) {
  const lang = useLang() as LangType;
  const [cart] = useCart();

  const items = cart.reduce((acc, item) => {
    const order = acc.order + 
    `Apranq - ${item.name}
      Qanak - ${item.qty * item.minOrder.qty} ${minOrderUnit('am', item.minOrder)}
      Guyn - ${item.photo.color}
      Chap - ${item.size.value} ${sizeLangMap[item.size.unit].am}
      Gin - ${formatPrice(item.price)} dram

      -----------------------------------------------
      \n
    `;

    const totalPrice = acc.totalPrice + item.qty * item.price;

    return { order, totalPrice };
  }, { order: '', totalPrice: 0 });

  const [details, setDetails] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    order: items.order,
    price: items.totalPrice
  });

  const backBtnText = {
    am: 'Նախորդ էջ',
    ru: 'Пред. стр.'
  }

  const onSubmit = () => {
    if (!details.name) {
      const msg = {
        am: 'Լրացրեք անունը',
        ru: 'Введите имя'
      };

      toast.error(msg[lang]);
      return;
    }

    if (!details.address) {
      const msg = {
        am: 'Լրացրեք հասցեն',
        ru: 'Заполните адрес'
      };
      
      toast.error(msg[lang]);
      return;
    }

    if (!details.phone) {
      const msg = {
        am: 'Լրացրեք հեռախոսահամարը',
        ru: 'Заполните номер телефона'
      };
      
      toast.error(msg[lang]);
      return;
    }

    if (!details.order) {
      const msg = {
        am: 'Պատվեր չի գտնվել',
        ru: 'Заказ не найден'
      };
      
      toast.error(msg[lang]);
      return;
    }
    
    console.log(details);
  };
  
  return (
    <div className="cart-contact">
      <ContactForm details={details} setDetails={setDetails} />
      <div className='buttons'>
        <ChangePage text={backBtnText[lang]} onClick={onBack} />
        <SubmitBtn onClick={onSubmit} />
      </div>
    </div>
  );
}