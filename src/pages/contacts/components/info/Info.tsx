import './Info.css';

import Address from './components/address/Address';
import Contacts from './components/contacts/Contacts';
import WorkingHrs from './components/workingHours/WorkingHrs';

export default function Info() {
  return (
    <section className='contact-info'>
      <Address />
      <WorkingHrs />
      <Contacts />
    </section>
  );
}