import Contact from './components/Contact/Contact';
import './Info.css';

export default function Info() {
  
  
  return (
    <section className='contact-info'>
      <Contact contact='phone' />
      <Contact contact='email' />
      <Contact contact='address' />
    </section>
  );
}