import { useState } from 'react';

import './LeftSide.css';

import { ItemType } from '../../../../../../types';
import useSp from '../../../../../../hooks/useSp';
import Info from './components/info/Info';
import Photo from './components/photo/Photo';
import PhotoModal from './components/photoModal/PhotoModal';


type Props = {
  item: ItemType;
}

export default function LeftSide({ item }: Props) {
  const [sp] = useSp();
  const currentPhoto = item.photos.find(p => p.color === sp.currentPhoto) || item.photos[0];
  
  const [selectedPhoto, setSelectedPhoto] = useState(currentPhoto);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

  const togglePhotoModal = () => setIsPhotoModalOpen(!isPhotoModalOpen);
  
  return (
    <section className='item-page--left-side'>
      <PhotoModal 
        selectedPhoto={selectedPhoto}
        setSelectedPhoto={setSelectedPhoto}   
        photos={item.photos}
        isOpen={isPhotoModalOpen} 
        onClick={togglePhotoModal} 
      />
      <Photo 
        selectedPhoto={selectedPhoto} 
        photos={item.photos} 
        setSelectedPhoto={setSelectedPhoto} 
        onClick={togglePhotoModal}
      />
      <Info item={item} selectedPhoto={selectedPhoto} />
    </section>
  );
}