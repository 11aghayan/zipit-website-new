import useSp from '../../../../hooks/useSp';
import { PhotoType } from '../../../../types';
import './EachPhoto.css';

type Props = {
  photo: PhotoType;
  selectedPhoto: PhotoType;
  setSelectedPhoto: React.Dispatch<React.SetStateAction<PhotoType>>;
  size: number;
  saveToSp?: boolean;
}

export default function EachPhoto({ photo, size, selectedPhoto, setSelectedPhoto, saveToSp }: Props) {
  const [sp, setSp] = useSp();
  
  const selected = selectedPhoto.src === photo.src;
  
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    
    if (!selected) {
      setSelectedPhoto(photo);

      if (saveToSp) {
        setSp({
          ...sp,
          currentPhoto: photo.color
        });
      } 
    }
  };
  
  return (
    <div 
      className={`item-photo-list--each-photo ${selected ? 'selected' : ''}`} 
      style={{ width: size, height: size }}
      onClick={handleClick}
    >
      <img 
        src={photo.src} 
        alt='item photo' 
        width={size} 
        height={size} 
      />
    </div>
  );
}