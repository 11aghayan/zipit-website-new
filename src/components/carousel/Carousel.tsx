import { PhotoType } from '../../types';
import './Carousel.css';
import CarouselPhoto from './components/carouselPhoto/CarouselPhoto';

type Props = {
  photos: PhotoType[];
  selectedPhoto: string;
  setSelectedPhoto: React.Dispatch<React.SetStateAction<string>>;
}

export default function Carousel({ photos, selectedPhoto, setSelectedPhoto }: Props) {
  
  return (
    <div className='carousel'>
      {
        photos.map((photo) => (
          <CarouselPhoto 
            key={photo.src}
            photo={photo}
            selectedPhoto={selectedPhoto}
            setSelectedPhoto={setSelectedPhoto}
          />
        ))
      }
    </div>
  );
}