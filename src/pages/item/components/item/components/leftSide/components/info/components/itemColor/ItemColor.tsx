import './ItemColor.css';

import useLang from '../../../../../../../../../../hooks/useLang';
import { LangType, PhotoType } from '../../../../../../../../../../types';

type Props = {
  setSelectedPhoto: React.Dispatch<React.SetStateAction<PhotoType>>;
  photos: PhotoType[];
}

export default function ItemColor({ photos, setSelectedPhoto }: Props) {
  const lang = useLang() as LangType;
  
  const langMap = {
    am: 'Գույն',
    ru: 'Цвет'
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPhoto(JSON.parse(e.target.value));
  };
  
  return (
    <div className='item-color'>
      <p className='label'>{langMap[lang]}:</p>
      <select 
        className='item-allColors'
        onChange={handleChange}
      >
        {
          photos.map((photo) => (
            <option 
              key={photo.color}
              value={JSON.stringify(photo)}
            >
              {photo.color}
            </option>
          ))
        }
      </select>
    </div>
  );
}