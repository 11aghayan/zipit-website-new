import { PhotoType } from '../../../../../../../../../../types';

type Props = {
  photos: PhotoType[];
}

export default function ItemPhoto({ photos }: Props) {

  const size = 110;

  return (
    <div className='item-photo' style={{ width: size, height: size }}>
      <img 
        src={photos[0].src} 
        alt="item photo" 
        height={size} 
        width={size}
      />
    </div>
  );
}