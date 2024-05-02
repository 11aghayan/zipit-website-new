import './ItemBottom.css';

import ItemPhotoList from '../../../../../../../../../../components/itemPhotoList/ItemPhotoList';
import { ItemType, PhotoType } from '../../../../../../../../../../types';

type Props = {
  item: ItemType;
  selectedPhoto: PhotoType;
  setSelectedPhoto: React.Dispatch<React.SetStateAction<PhotoType>>;
}

export default function ItemBottom({ item, selectedPhoto, setSelectedPhoto }: Props) {

  return (
    <section className='item-bottom'>
      <ItemPhotoList photos={item.photos} selectedPhoto={selectedPhoto} setSelectedPhoto={setSelectedPhoto} />
    </section>
  );
}