import './ItemPhotoList.css';

import { PhotoType } from '../../types';
import EachPhoto from './components/eachPhoto/EachPhoto';

type Props = {
  photos: PhotoType[];
  selectedPhoto: string;
  setSelectedPhoto: React.Dispatch<React.SetStateAction<string>>;
}

export default function ItemPhotoList({ photos, selectedPhoto, setSelectedPhoto }: Props) {
  
  return (
    <div className='item-photo-list'>
      {
        photos.map((photo) => (
          <EachPhoto 
            key={photo.src}
            photo={photo}
            selectedPhoto={selectedPhoto}
            setSelectedPhoto={setSelectedPhoto}
          />
        ))
      }
    </div>
  );
}