import './Info.css';

import { ItemType, PhotoType } from '../../../../../../../../types';
import ItemColor from "./components/itemColor/ItemColor";
import ItemName from "./components/itemName/ItemName";
import ItemAvailable from './components/itemAvailable/ItemAvailable';
import ItemSize from './components/itemSize/ItemSize';
import MinOrder from './components/minOrder/MinOrder';
import ItemPrice from './components/itemPrice/ItemPrice';
import { useState } from 'react';

type Props = {
  item: ItemType;
  selectedPhoto: PhotoType;
}

export default function Info({ item, selectedPhoto }: Props) {
  const [isSizeAvailable, setIsSizeAvailable] = useState(true);
  
  return (
    <section className="info">
      <ItemName name={item.name} />
      <ItemColor color={selectedPhoto.color} />
      <ItemSize 
        size={item.size} 
        isSizeAvailable={isSizeAvailable} 
        setIsSizeAvailable={setIsSizeAvailable} 
      />
      <MinOrder minOrder={item.minOrder} />
      <ItemAvailable available={isSizeAvailable} />
      <ItemPrice price={item.price} promo={item.promo} />
    </section>
  );
}