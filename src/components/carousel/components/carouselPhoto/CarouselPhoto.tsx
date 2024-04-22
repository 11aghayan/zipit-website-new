import { PhotoType } from '../../../../types';
import './CarouselPhoto.css';

type Props = {
  photo: PhotoType;
  selectedPhoto: string;
  setSelectedPhoto: React.Dispatch<React.SetStateAction<string>>;
  size?: number;
}

export default function CarouselPhoto({ photo, size = 30, selectedPhoto, setSelectedPhoto }: Props) {

  const selected = selectedPhoto === photo.src;
  
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    
    if (!selected) {
      setSelectedPhoto(photo.src);
    }
  };
  
  return (
    <div 
      className={`carousel-photo ${selected ? 'selected' : ''}`} 
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