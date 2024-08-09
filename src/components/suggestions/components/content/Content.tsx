import './Content.css';

import { useEffect, useState } from 'react';

import { RandomSimilarItemType } from '../../../../types';
import Item from './components/item/Item';
import useScreen from '../../../../hooks/useScreenSize';

type Props = {
  items: RandomSimilarItemType[];
}

export default function Content({ items }: Props) {
  const { screen } = useScreen();
  const [photoSize, setPhotoSize] = useState<90 | 110 | 130>(screen === 'sm' ? 90 : screen === 'md' ? 110 : 130);
  
  useEffect(() => {
    setPhotoSize(screen === 'sm' ? 90 : screen === 'md' ? 110 : 130);
  }, [screen])

  return (
    <section className='suggestion-content'>
      <div className='items-wrapper'>
        {
          items.map((item) => (
            <Item 
              key={item.id} 
              item={item} 
              photoSize={photoSize}
            />
          ))
        }
      </div>
    </section>
  );
}