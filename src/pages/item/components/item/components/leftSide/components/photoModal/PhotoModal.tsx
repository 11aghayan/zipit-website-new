import './PhotoModal.css';

import { PhotoType } from '../../../../../../../../types';
import ItemPhotoList from '../../../../../../../../components/itemPhotoList/ItemPhotoList';
import CloseBtn from './components/closeBtn/CloseBtn';
import SelectedPhoto from './components/selectedPhoto/SelectedPhoto';

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  selectedPhoto: PhotoType;
  photos: PhotoType[];
  setSelectedPhoto: React.Dispatch<React.SetStateAction<PhotoType>>
}

export default function PhotoModal({ isOpen, closeModal, selectedPhoto, setSelectedPhoto, photos }: Props) {
  
  return (
    <div className={`photo-modal ${isOpen ? 'open' : ''}`} onClick={closeModal}>
      <SelectedPhoto photo={selectedPhoto} />
      <p className='color'>{selectedPhoto.color}</p>
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
      <CloseBtn onClick={closeModal} />
    </div>
  );
}