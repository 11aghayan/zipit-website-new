import './ContactsPage.css';

import Info from './components/info/Info';
import Map from './components/map/Map';

export default function ContactsPage() {

  return (
    <main className="contacts-page">
      <Info />
      <Map />
    </main>
  );
}