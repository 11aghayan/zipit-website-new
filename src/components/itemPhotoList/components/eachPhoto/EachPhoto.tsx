import { PhotoType } from '../../../../types';
import './EachPhoto.css';

type Props = {
  photo: PhotoType;
  selectedPhoto: string;
  setSelectedPhoto: React.Dispatch<React.SetStateAction<string>>;
  size?: number;
}

export default function EachPhoto({ photo, size = 40, selectedPhoto, setSelectedPhoto }: Props) {

  const selected = selectedPhoto === photo.src;
  
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    
    if (!selected) {
      setSelectedPhoto(photo.src);
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