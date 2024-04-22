import './ItemBottom.css';

import Carousel from '../../../../../../../../../../components/carousel/Carousel';
import { ItemType } from '../../../../../../../../../../types';

type Props = {
  item: ItemType;
  selectedPhoto: string;
  setSelectedPhoto: React.Dispatch<React.SetStateAction<string>>;
}

export default function ItemBottom({ item, selectedPhoto, setSelectedPhoto }: Props) {

  return (
    <section className='item-bottom'>
      <Carousel photos={item.photos} selectedPhoto={selectedPhoto} setSelectedPhoto={setSelectedPhoto} />
    </section>
  );
}