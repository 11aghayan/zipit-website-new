import './Photo.css';

import ItemPhotoList from '../../../../../../../../components/itemPhotoList/ItemPhotoList';
import useLang from '../../../../../../../../hooks/useLang';
import { LangType, PhotoType } from '../../../../../../../../types';

type Props = {
  photos: PhotoType[];
  selectedPhoto: PhotoType;
  setSelectedPhoto: React.Dispatch<React.SetStateAction<PhotoType>>;
  onClick: () => void;
}

export default function Photo({ selectedPhoto, setSelectedPhoto, photos, onClick }: Props) {
  const lang = useLang() as LangType;
  
  const langMap = {
    am: 'Գույներ',
    ru: 'Цвета'
  };

  const size = 300;
  
  return (
    <div className='item-photo' style={{ width: size }}>
      <img className='selected-photo' src={selectedPhoto.src} alt="item photo" onClick={onClick} height={size} width={size} />
      <p className='photo-label'>{langMap[lang]}</p>
      <ItemPhotoList 
        photos={photos} 
        selectedPhoto={selectedPhoto} 
        setSelectedPhoto={setSelectedPhoto} 
        size={50}
        cursor='pointer'
        full
        saveToSp
      />
    </div>
  );
}