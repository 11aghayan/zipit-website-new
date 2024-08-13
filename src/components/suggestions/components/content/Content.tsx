import './Content.css';

import { useEffect, useState } from 'react';

import type { RandomSimilarItemType } from '../../../../types';
import Item from './components/item/Item';
import useScreen from '../../../../hooks/useScreenSize';

type Props = {
  items: RandomSimilarItemType[];
}

type TouchActionsType = {
  lastPos: number | null;
  handleTouchMove: () => (e: TouchEvent) => void;
  handleTouchEnd: () => (e: TouchEvent) => void;
}

export default function Content({ items }: Props) {
  const { screen } = useScreen();

  const fullItems = [...items, ...items, ...items, items[0]];

  const [photoSize, setPhotoSize] = useState<90 | 110 | 130>(screen === 'sm' ? 90 : screen === 'md' ? 110 : 130); 
  const itemsWidth = (photoSize + 48) * items.length;

  const [wrapperLeft, setWrapperLeft] = useState(-itemsWidth);
  const [frame, setFrame] = useState(0);
  const [speed, setSpeed] = useState(1);
  
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const delta = e.deltaX || e.deltaY;
    setWrapperLeft(prev => prev - delta);
  };

  const touchActions: TouchActionsType = {
    lastPos: null,
    handleTouchMove: function () {
      return (e: TouchEvent) => {
        e.preventDefault();
        const { clientX } = e.changedTouches[0];
        if (!this.lastPos) {
          this.lastPos = clientX;
          return;
        }
        const delta = (clientX - this.lastPos) * 1.5;
        
        setWrapperLeft(prev => prev + delta);
        this.lastPos = clientX;
      }
    },
    handleTouchEnd: function () {
      return (e: TouchEvent) => {
        e.preventDefault();
        this.lastPos = null;
        setSpeed(1);
      }
    }
  }

  const animate = () => {
    setFrame(prev => prev + 1);
    if (frame % 3 === 0) {
      setWrapperLeft(prev => prev - speed);
    }
  }

  useEffect(() => {
    const touchMoveHandler = touchActions.handleTouchMove();
    const touchEndHandler = touchActions.handleTouchEnd();
    
    const element = document.querySelector('.suggestion-content') as HTMLElement;
    
    if (element) {
      element.addEventListener('touchmove', touchMoveHandler, { passive: false });
      element.addEventListener('touchend', touchEndHandler);
    }
    
    return () => {
      if (element) {
        element.removeEventListener('touchmove', touchMoveHandler);
        element.removeEventListener('touchend', touchEndHandler);
      }
    };
  }, []);
  
  useEffect(() => {
    requestAnimationFrame(animate);
  }, [frame]);

  useEffect(() => {
    setPhotoSize(screen === 'sm' ? 90 : screen === 'md' ? 110 : 130);
  }, [screen]);

  useEffect(() => {
    if (wrapperLeft <= (-itemsWidth * 2) || wrapperLeft >= 0) {
      setWrapperLeft(-itemsWidth);
    }
  }, [wrapperLeft]);
  
  return (
    <section
      className='suggestion-content' 
      onWheel={handleWheel}
      onTouchStart={() => setSpeed(0)}
      onMouseEnter={() => setSpeed(0)}
      onMouseLeave={() => setSpeed(1)}
    >
      <div className='items-wrapper' style={{ left: wrapperLeft }}>
        {
          fullItems.map((item, i) => (
            <Item 
              key={item.id + item.name + i} 
              item={item} 
              photoSize={photoSize}
            />
          ))
        }
      </div>
    </section>
  );
}