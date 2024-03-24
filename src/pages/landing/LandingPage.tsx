import { useState } from 'react';
import './LandingPage.css';
import Filters from './components/Filters/Filters';

import TopBar from './components/TopBar/TopBar';

export default function LandingPage() {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [offset, setBarOffset] = useState(0);

  return (
    <main className='landing-page'>
      <TopBar setIsOpen={setIsFiltersOpen} setBarOffset={setBarOffset} />
      <Filters isOpen={isFiltersOpen} setIsOpen={setIsFiltersOpen} />
      <div className='content' style={{ top: `${offset}px`}}>Content</div>
    </main>
  );
}