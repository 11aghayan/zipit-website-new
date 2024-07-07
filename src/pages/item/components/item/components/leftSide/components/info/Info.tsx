import './Info.css';

import { useState } from 'react';

import { ItemType, PhotoType, SizeValueType } from '../../../../../../../../types';
import useSp from '../../../../../../../../hooks/useSp';

import ItemColor from "./components/itemColor/ItemColor";
import ItemName from "./components/itemName/ItemName";
import ItemAvailable from './components/itemAvailable/ItemAvailable';
import ItemSize from './components/itemSize/ItemSize';
import MinOrder from './components/minOrder/MinOrder';
import ItemPrice from './components/itemPrice/ItemPrice';
import AddToCart from './components/addToCartBtn/AddToCart';

type Props = {
  item: ItemType;
  selectedPhoto: PhotoType;
}

export default function Info({ item, selectedPhoto }: Props) {
  const [sp] = useSp();
  
  const [isSizeAvailable, setIsSizeAvailable] = useState(true);
  const firstAvailable = (item.size.values.find(v => v.available)?.value || item.size.values[0].value).toString();
  const defaultValue = sp.size || firstAvailable;
  const defaultActive = item.size.values.find(v => v.value === Number(defaultValue))!;
  const [activeSize, setActiveSize] = useState<SizeValueType>(defaultActive);
  
  return (
    <section className="info">
      <ItemName name={item.name} />
      <ItemColor color={selectedPhoto.color} />
      <ItemSize 
        size={item.size} 
        isSizeAvailable={isSizeAvailable} 
        setIsSizeAvailable={setIsSizeAvailable} 
        activeSize={activeSize}
        setActiveSize={setActiveSize}
        defaultValue={defaultValue}
      />
      <MinOrder minOrder={item.minOrder} />
      <ItemAvailable available={isSizeAvailable} />
      <ItemPrice price={item.price} promo={item.promo} />
      <AddToCart 
        id={item.id}
        isSizeAvailable={isSizeAvailable} 
        name={item.name}
        photo={selectedPhoto}
        price={item.promo || item.price}
        size={{ value: activeSize.value, unit: item.size.unit }}
        minOrder={item.minOrder}
      />
    </section>
  );
}