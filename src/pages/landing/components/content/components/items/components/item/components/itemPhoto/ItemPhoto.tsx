import './ItemPhoto.css';

import { PhotoType } from "../../../../../../../../../../types";

type Props = {
  photo: PhotoType;
}

export default function ItemPhoto({ photo }: Props) {

  const size = 110;

  return (
    <div className="landing--item-photo" style={{ width: size, height: size }}>
      <img 
        src={photo.src} 
        alt="item photo" 
        height={size} 
        width={size}
      />
    </div>
  );
}