import './ItemPhotoList.css';

import { PhotoType } from '../../types';
import EachPhoto from './components/eachPhoto/EachPhoto';

type Props = {
  photos: PhotoType[];
  selectedPhoto: PhotoType;
  setSelectedPhoto: React.Dispatch<React.SetStateAction<PhotoType>>;
  size?: number;
  full?: boolean;
  saveToSp?: boolean;
  cursor?: 'default' | 'pointer';
  justifyCenter?: boolean;
}

export default function ItemPhotoList({ photos, selectedPhoto, setSelectedPhoto, size = 40, full = false, saveToSp = false, cursor = 'default', justifyCenter = false }: Props) {
  
  const slicedPhotos = !full && photos.length > 4 ? photos.slice(0, 3) : photos;
  const tooMany = slicedPhotos !== photos ? photos.length - 3 : 0;
  
  return (
    <div className='item-photo-list' style={{ justifyContent: justifyCenter ? 'center' : 'flex-start' }}>
      {
        slicedPhotos.map((photo) => (
          <EachPhoto 
            key={photo.src}
            photo={photo}
            selectedPhoto={selectedPhoto}
            setSelectedPhoto={setSelectedPhoto}
            size={size}
            saveToSp={saveToSp}
            cursor={cursor}
          />
        ))
      }
      {
        tooMany 
        ?
        <div className='more-photos'>
          +{tooMany}
        </div>
        :
        null
      }
    </div>
  );
}