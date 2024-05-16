import './SelectedPhoto.css';

import { PhotoType } from '../../../../../../../../../../types';

type Props = {
  photo: PhotoType;
}

export default function SelectedPhoto({ photo }: Props) {

  return (
    <section className='selected-photo' onClick={(e) => e.stopPropagation()}>
      <img src={photo.src} alt="item photo" />
    </section>
  );
}