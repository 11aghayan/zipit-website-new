import './PhotoModal.css';

import { PhotoType } from '../../../../../../../../types';
import ItemPhotoList from '../../../../../../../../components/itemPhotoList/ItemPhotoList';

type Props = {
  isOpen: boolean;
  onClick: () => void;
  selectedPhoto: PhotoType;
  photos: PhotoType[];
  setSelectedPhoto: React.Dispatch<React.SetStateAction<PhotoType>>
}

export default function PhotoModal({ isOpen, onClick, selectedPhoto, setSelectedPhoto, photos }: Props) {
  
  return (
    <div className={`photo-modal ${isOpen ? 'open' : ''}`} onClick={onClick}>
      <section className='selected-photo' onClick={(e) => e.stopPropagation()}>
        <img src={selectedPhoto.src} alt="item photo" />
      </section>
      <p className='color'>Color</p>
      <ItemPhotoList 
        photos={photos}
        selectedPhoto={selectedPhoto}
        setSelectedPhoto={setSelectedPhoto}
        size={100}
        cursor='pointer'
        full
        saveToSp
        justifyCenter
      />
    </div>
  );
}