import './LeftSide.css';

import Photo from './components/photo/Photo';
import { ItemType } from '../../../../../../types';
import Info from './components/info/Info';
import useSp from '../../../../../../hooks/useSp';
import { useState } from 'react';


type Props = {
  item: ItemType;
}

export default function LeftSide({ item }: Props) {
  const [sp] = useSp();
  const currentPhoto = item.photos.find(p => p.color === sp.currentPhoto) || item.photos[0];
  
  const [selectedPhoto, setSelectedPhoto] = useState(currentPhoto);
  
  return (
    <section className='item-page--left-side'>
      <Photo selectedPhoto={selectedPhoto}  photos={item.photos} setSelectedPhoto={setSelectedPhoto} />
      <Info item={item} selectedPhoto={selectedPhoto} />
    </section>
  );
}