import ItemPhotoList from '../../../../../../../../components/itemPhotoList/ItemPhotoList';
import { PhotoType } from '../../../../../../../../types';
import './Photo.css';

type Props = {
  photos: PhotoType[];
  selectedPhoto: PhotoType;
  setSelectedPhoto: React.Dispatch<React.SetStateAction<PhotoType>>;
}

export default function Photo({ selectedPhoto, setSelectedPhoto, photos }: Props) {

  const size = 310;
  
  return (
    <div className='item-photo' style={{ width: size }}>
      <img src={selectedPhoto.src} alt="item photo" width={size} height={size} />
      <ItemPhotoList 
        photos={photos} 
        selectedPhoto={selectedPhoto} 
        setSelectedPhoto={setSelectedPhoto} 
        full={true}
        saveToSp={true}
      />
    </div>
  );
}