import './Info.css';

import { useState } from 'react';

import { ItemType, LangType, PhotoType, SizeUnitType, SizeValueType } from '../../../../../../../../types';
import useSp from '../../../../../../../../hooks/useSp';

import ItemColor from "./components/itemColor/ItemColor";
import ItemName from "./components/itemName/ItemName";
import ItemAvailable from './components/itemAvailable/ItemAvailable';
import ItemSize from './components/itemSize/ItemSize';
import MinOrder from './components/minOrder/MinOrder';
import ItemPrice from './components/itemPrice/ItemPrice';
import AddToCart from './components/addToCartBtn/AddToCart';
import useLang from '../../../../../../../../hooks/useLang';

type Props = {
  item: ItemType;
  selectedPhoto: PhotoType;
}

export default function Info({ item, selectedPhoto }: Props) {
  const lang = useLang() as LangType;
  const [sp] = useSp();
  const sizeColorIndex = lang === 'am' ? 0 : 1;
  
  const formattedSize = item.size.values.reduce((prev: { values: (SizeValueType & { available: boolean })[], unit: SizeUnitType } , { value, colors }) => {
    const formattedColors = colors.map(c => c.split('&dash&')[sizeColorIndex]);
    return {
      ...prev,
      values: [
        ...prev.values,
        {
          value,
          colors,
          available: formattedColors.includes(selectedPhoto.color)
        }
      ]
    }
  }, { values: [], unit: item.size.unit });
  
  const [isSizeAvailable, setIsSizeAvailable] = useState(true);
  const firstAvailable = (formattedSize.values.find(v => v.available)?.value || item.size.values[0].value).toString();
  const defaultValue = sp.size || firstAvailable;
  const defaultActive = formattedSize.values.find(v => v.value === Number(defaultValue))!;
  const [activeSize, setActiveSize] = useState<SizeValueType & { available: boolean }>(defaultActive);
  const [qty, setQty] = useState('1');

  return (
    <section className="info">
      <ItemName name={item.name} />
      <ItemColor color={selectedPhoto.color} />
      <ItemSize 
        size={formattedSize} 
        isSizeAvailable={isSizeAvailable} 
        setIsSizeAvailable={setIsSizeAvailable} 
        activeSize={activeSize}
        setActiveSize={setActiveSize}
        defaultValue={defaultValue}
        color={selectedPhoto.color}
      />
      <MinOrder minOrder={item.minOrder} />
      <ItemAvailable available={isSizeAvailable} />
      <ItemPrice 
        price={item.price} 
        promo={item.promo}  
        minOrder={item.minOrder.qty}
        qty={parseInt(qty || '1')}
      />
      <AddToCart 
        id={item.id + '-' + activeSize.value + '-' + selectedPhoto.color}
        isSizeAvailable={isSizeAvailable} 
        name={item.name}
        photo={selectedPhoto}
        price={item.promo || item.price}
        size={{ value: activeSize.value, unit: item.size.unit }}
        minOrder={item.minOrder}
        qty={qty}
        setQty={setQty}
      />
    </section>
  );
}