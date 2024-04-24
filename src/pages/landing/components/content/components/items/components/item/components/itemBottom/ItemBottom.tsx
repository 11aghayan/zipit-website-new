import './ItemBottom.css';

import ItemPhotoList from '../../../../../../../../../../components/itemPhotoList/ItemPhotoList';
import { ItemType } from '../../../../../../../../../../types';

type Props = {
  item: ItemType;
  selectedPhoto: string;
  setSelectedPhoto: React.Dispatch<React.SetStateAction<string>>;
}

export default function ItemBottom({ item, selectedPhoto, setSelectedPhoto }: Props) {

  return (
    <section className='item-bottom'>
      <ItemPhotoList photos={item.photos} selectedPhoto={selectedPhoto} setSelectedPhoto={setSelectedPhoto} />
    </section>
  );
}