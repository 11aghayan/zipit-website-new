import { useLocation } from 'react-router-dom';

import './Item.css';

import { ItemType } from '../../../../../../../../types';
import ItemBottom from './components/itemBottom/ItemBottom';
import { useState } from 'react';
import ItemTop from './components/itemTop/ItemTop';

type Props = {
  item: ItemType
}

export default function Item({ item }: Props) {
  const { pathname } = useLocation();

  const [selectedPhoto, setSelectedPhoto] = useState(item.photos[0]);
  
  return (
    <article className='item'>
      <a href={`${pathname}/${item.id}`}>
        <ItemTop item={item} selectedPhoto={selectedPhoto} />
        <ItemBottom item={item} selectedPhoto={selectedPhoto} setSelectedPhoto={setSelectedPhoto} />
      </a>
    </article>
  );
}