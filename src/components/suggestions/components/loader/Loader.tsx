import './Loader.css';

import { useEffect, useState } from 'react';

import useScreen from '../../../../hooks/useScreenSize';

export default function Loader() {
  const { screen, width: screenWidth } = useScreen();

  const [photoSize, setPhotoSize] = useState<90 | 110 | 130>(screen === 'sm' ? 90 : screen === 'md' ? 110 : 130); 
  const itemWidth = photoSize + 40;
  const itemHeight = photoSize + 85;
  
  const [itemsQty, setItemsQty] = useState(Math.ceil(screenWidth / itemWidth));
  
  useEffect(() => {
    setItemsQty(Math.ceil(screenWidth / itemWidth));
  }, [screenWidth]);

  useEffect(() => {
    setPhotoSize(screen === 'sm' ? 90 : screen === 'md' ? 110 : 130);
  }, [screen]);
  
  return (
    <section className='suggestions-loader'>
      {
        new Array(itemsQty).fill(1).map((_val, i) => (
          <article key={'suggestion-loader-article-' + i} style={{ width: itemWidth, height: itemHeight }} />
        ))
      }
    </section>
  );
}