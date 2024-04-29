import './Contacts.css';

import Contact from './components/contact/Contact';

export default function Contacts() {
  
  return (
    <section className='contacts'>
      <Contact contact='phone' />
      <Contact contact='whatsapp' />
      <Contact contact='telegram' />
      <Contact contact='viber' />
      <Contact contact='email' />
    </section>
  );
}