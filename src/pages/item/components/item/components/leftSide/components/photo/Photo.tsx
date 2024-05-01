import './Photo.css';

import ItemPhotoList from '../../../../../../../../components/itemPhotoList/ItemPhotoList';
import useLang from '../../../../../../../../hooks/useLang';
import { LangType, PhotoType } from '../../../../../../../../types';
import { useMediaQuery } from 'react-responsive';

type Props = {
  photos: PhotoType[];
  selectedPhoto: PhotoType;
  setSelectedPhoto: React.Dispatch<React.SetStateAction<PhotoType>>;
}

export default function Photo({ selectedPhoto, setSelectedPhoto, photos }: Props) {
  const lang = useLang() as LangType;

  const isTablet = useMediaQuery({ minWidth: 600 });
  const isDesktop = useMediaQuery({ minWidth: 1100 });
  
  const langMap = {
    am: 'Գույներ',
    ru: 'Цвета'
  };

  const size = isDesktop ? 500 : isTablet ? 400 : 300;
  
  return (
    <div className='item-photo' style={{ width: size }}>
      <img className='selected-photo' src={selectedPhoto.src} alt="item photo" height={size} width={size} />
      <p className='photo-label'>{langMap[lang]}</p>
      <ItemPhotoList 
        photos={photos} 
        selectedPhoto={selectedPhoto} 
        setSelectedPhoto={setSelectedPhoto} 
        full={true}
        saveToSp={true}
        size={50}
      />
    </div>
  );
}