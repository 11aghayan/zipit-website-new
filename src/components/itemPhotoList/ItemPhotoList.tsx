import './ItemPhotoList.css';

import { PhotoType } from '../../types';
import EachPhoto from './components/eachPhoto/EachPhoto';

type Props = {
  photos: PhotoType[];
  selectedPhoto: string;
  setSelectedPhoto: React.Dispatch<React.SetStateAction<string>>;
}

export default function ItemPhotoList({ photos, selectedPhoto, setSelectedPhoto }: Props) {

  const slicedPhotos = photos.length > 4 ? photos.slice(0, 3) : photos;
  const tooMany = slicedPhotos !== photos ? photos.length - 3 : 0;
  

  
  return (
    <div className='item-photo-list'>
      {
        slicedPhotos.map((photo) => (
          <EachPhoto 
            key={photo.src}
            photo={photo}
            selectedPhoto={selectedPhoto}
            setSelectedPhoto={setSelectedPhoto}
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