import { useState } from 'react';

import './LandingPage.css';

import Filters from './components/filters/Filters';
import TopBar from './components/topBar/TopBar';
import Content from './components/content/Content';

export default function LandingPage() {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  return (
    <main className='landing-page'>
      <TopBar setIsFiltersOpen={setIsFiltersOpen} />
      <div className='wrapper'>
        <div className='filters-wrapper'>
          <Filters isOpen={isFiltersOpen} setIsOpen={setIsFiltersOpen} />
        </div>
        <div className='content-wrapper'>
          <Content />
        </div>
      </div>
    </main>
  );
}