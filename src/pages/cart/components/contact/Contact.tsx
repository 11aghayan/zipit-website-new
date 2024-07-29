import './Contact.css';

import toast from 'react-hot-toast';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ChangePage from '../changePage/ChangePage'
import useLang from '../../../../hooks/useLang';
import type { LangType } from '../../../../types';
import useCart from '../../../../hooks/useCart';
import sizeLangMap from '../../../../utils/sizeLangMap';
import minOrderUnit from '../../../../utils/minOrderUnit';
import formatPrice from '../../../../utils/formatPrice';
import SubmitBtn from './components/submitBtn/SubmitBtn';
import ContactForm from './components/contactForm/ContactForm';
import sendOrder from '../../../../actions/sendOrder';

type Props = {
  onBack: () => void;
}

export default function Contact({ onBack }: Props) {
  const navigate = useNavigate();
  const lang = useLang() as LangType;
  const [cart, setCart] = useCart();
  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  const items = cart.reduce((acc, item) => {
    const order = acc.order + 
    `
      Ապրանք - ${item.name}
      Քանակ - ${item.qty * item.minOrder.qty} ${minOrderUnit('am', item.minOrder)}
      Գույն - ${item.photo.color}
      Չափ - ${item.size.value} ${sizeLangMap[item.size.unit].am}
      Գին - ${formatPrice(item.price * item.qty * item.minOrder.qty)} դրամ

      -----------------------------------------------
      \n
    `;

    const totalPrice = acc.totalPrice + item.qty * item.price * item.minOrder.qty;

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

  const onSubmit = async () => {
    try {
      setButtonsDisabled(true);
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
      
      const success = await sendOrder(details);
      if (!success) {
        const msg = {
          am: 'Ինչ որ բան այնպես չգնաց։ Կրկին փորձեք',
          ru: 'Что-то пошло не так. Попробуйте еще раз'
        };
        toast.error(msg[lang]);
        return;
      }
      
      const msg = {
        am: 'Պատվերն ընդունված է',
        ru: 'Заказ принят'
      }
      toast.success(msg[lang]);
      setCart([]);
      navigate(`/${lang}`);
    } finally {
      setButtonsDisabled(false);
    }
  };
  
  return (
    <div className="cart-contact">
      <ContactForm details={details} setDetails={setDetails} />
      <div className='buttons'>
        <ChangePage text={backBtnText[lang]} onClick={onBack} disabled={buttonsDisabled} />
        <SubmitBtn onClick={onSubmit} disabled={buttonsDisabled} />
      </div>
    </div>
  );
}