import { PhotoType } from '../../../../../../../../../../types';
import ItemPhoto from '../itemPhoto/ItemPhoto';

type Props = {
  selectedPhoto: PhotoType;
}

export default function ItemLeftSide({ selectedPhoto }: Props) {
  
  return (
    <section className='item-left-side'>
      <ItemPhoto photo={selectedPhoto} />
    </section>
  );
}