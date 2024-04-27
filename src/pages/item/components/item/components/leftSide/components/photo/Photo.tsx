import ItemPhotoList from '../../../../../../../../components/itemPhotoList/ItemPhotoList';
import useLang from '../../../../../../../../hooks/useLang';
import { LangType, PhotoType } from '../../../../../../../../types';
import './Photo.css';

type Props = {
  photos: PhotoType[];
  selectedPhoto: PhotoType;
  setSelectedPhoto: React.Dispatch<React.SetStateAction<PhotoType>>;
}

export default function Photo({ selectedPhoto, setSelectedPhoto, photos }: Props) {
  const lang = useLang() as LangType;

  const langMap = {
    am: 'Գույներ',
    ru: 'Цвета'
  };

  const size = 300;
  
  return (
    <div className='item-photo' style={{ width: size }}>
      <img src={selectedPhoto.src} alt="item photo" width={size} height={size} />
      <p className='photo-label'>{langMap[lang]}</p>
      <ItemPhotoList 
        photos={photos} 
        selectedPhoto={selectedPhoto} 
        setSelectedPhoto={setSelectedPhoto} 
        full={true}
        saveToSp={true}
        size={60}
      />
    </div>
  );
}