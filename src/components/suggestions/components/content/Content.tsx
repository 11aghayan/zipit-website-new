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
  pressTime: number;
  handleTouchMove: () => (e: TouchEvent) => void;
  handleTouchEnd: () => (e: TouchEvent) => void;
}

export default function Content({ items }: Props) {
  const { screen, width: screenWidth } = useScreen();
  
  const [photoSize, setPhotoSize] = useState<90 | 110 | 130>(screen === 'sm' ? 90 : screen === 'md' ? 110 : 130); 
  const itemsWidth = (photoSize + 48) * items.length;

  const ratio = screenWidth / itemsWidth;
  const itemsLength = ratio < 1 ? 3 : Math.ceil(ratio) + 2;

  const fullItems: RandomSimilarItemType[] = [];

  for (let i = 0; i < itemsLength; i++) {
    fullItems.push(...items);
  }

  const [wrapperLeft, setWrapperLeft] = useState(-itemsWidth);
  const [frame, setFrame] = useState(0);
  const movingSpeed = 1;
  const [speed, setSpeed] = useState(movingSpeed);
  
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const delta = e.deltaX || e.deltaY;
    setWrapperLeft(prev => prev - delta);
  };

  const touchActions: TouchActionsType = {
    lastPos: null,
    pressTime: 0,
    handleTouchMove: function () {
      return (e: TouchEvent) => {
        e.preventDefault();
        this.pressTime++;
        const { clientX } = e.changedTouches[0];
        if (!this.lastPos) {
          this.lastPos = clientX;
          return;
        }
        const delta = clientX - this.lastPos;
        
        setWrapperLeft(prev => prev + delta);
        this.lastPos = clientX;
      }
    },
    handleTouchEnd: function () {
      return (e: TouchEvent) => {
        e.preventDefault();
        if (this.pressTime < 5) {
          let target: HTMLElement | null = e.target as HTMLElement;
          let iteration = 0;
          while (target?.tagName !== 'A' && iteration < 5) {
            target = (target?.parentNode || null) as HTMLElement | null;
            iteration++;
          }
          if (target?.tagName === 'A') {
            const a = target as HTMLAnchorElement;
            a.click();
          }
        }
        this.pressTime = 0;
        this.lastPos = null;
        setSpeed(movingSpeed);
      }
    }
  }

  const animate = () => {
    setFrame(prev => prev + 1);
    setWrapperLeft(prev => prev - speed);
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
      onMouseLeave={() => setSpeed(movingSpeed)}
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