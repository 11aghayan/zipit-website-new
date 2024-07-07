import './Content.css';

import Items from "../items/Items";
import Contact from '../contact/Contact';
import { useState } from 'react';

export default function Content() {
  const [showContact, setShowContact] = useState(false);

  const handleItemsNext = () => {
    setShowContact(true);
  };

  const handleContactBack = () => {
    setShowContact(false);
  };
  
  return (
    <div className={`cart-content ${showContact ? 'show-contact' : ''}`}>
      <Items onNextBtnClick={handleItemsNext} />
      <Contact onBack={handleContactBack} />
    </div>
  );
}