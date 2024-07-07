import useLang from '../../../../../../hooks/useLang';
import { LangType } from '../../../../../../types';
import './ContactForm.css';

type Props = {
  details: {
    name: string;
    address: string;
    phone: string;
    email: string;
    order: string;
    price: number;
  };
  setDetails: React.Dispatch<React.SetStateAction<{
    name: string;
    address: string;
    phone: string;
    email: string;
    order: string;
    price: number;
  }>>
}

export default function ContactForm({ details, setDetails }: Props) {
  const lang = useLang() as LangType;
  
  const labels = {
    am: {
      name: 'Անուն*',
      address: 'Հասցե*',
      phone: 'Հեռախոս*',
      email: 'Էլ հասցե'
    },
    ru: {
      name: 'Имя*',
      address: 'Адрес*',
      phone: 'Телефон*',
      email: 'Эл адрес'
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails(prev => ({ ...prev, name: e.target.value }));
  }

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails(prev => ({ ...prev, address: e.target.value }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails(prev => ({ ...prev, phone: e.target.value }));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails(prev => ({ ...prev, email: e.target.value }));
  };
  
  return (
    <section className='cart-address-form'>
      <div>
        <label htmlFor="name">{labels[lang].name}</label>
        <input 
          type="text" 
          id='name' 
          onChange={handleNameChange} 
          value={details.name}
        />
      </div>
      <div>
        <label htmlFor="address">{labels[lang].address}</label>
        <input 
          type="text" 
          id='address' 
          onChange={handleAddressChange} 
          value={details.address}
        />
      </div>
      <div>
        <label htmlFor="phone">{labels[lang].phone}</label>
        <input 
          type="text" 
          id='phone' 
          onChange={handlePhoneChange} 
          value={details.phone}
        />
      </div>
      <div>
        <label htmlFor="email">{labels[lang].email}</label>
        <input 
          type="text" 
          id='email' 
          onChange={handleEmailChange} 
          value={details.email}
        />
      </div>
    </section>
  );
}