import './TopPart.css';

import Photo from './components/photo/Photo';
import { ItemType } from '../../../../../../types';
import Info from './components/info/Info';
import useSp from '../../../../../../hooks/useSp';
import { useState } from 'react';


type Props = {
  item: ItemType;
}

export default function TopPart({ item }: Props) {
  const [sp] = useSp();
  const currentPhoto = item.photos.find(p => p.color === sp.currentPhoto) || item.photos[0];
  
  const [selectedPhoto, setSelectedPhoto] = useState(currentPhoto);
  
  return (
    <section className='item-page--top-part'>
      <Photo selectedPhoto={selectedPhoto}  photos={item.photos} setSelectedPhoto={setSelectedPhoto} />
      <Info item={item} selectedPhoto={selectedPhoto} />
    </section>
  );
}