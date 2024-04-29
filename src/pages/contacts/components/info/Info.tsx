import './Info.css';

import Address from './components/address/Address';
import Contacts from './components/contacts/Contacts';

export default function Info() {
  return (
    <section className='contact-info'>
      <Address />
      <Contacts />
    </section>
  );
}