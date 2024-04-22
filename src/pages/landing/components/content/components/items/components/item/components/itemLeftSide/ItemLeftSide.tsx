import ItemPhoto from '../itemPhoto/ItemPhoto';

type Props = {
  selectedPhoto: string;
}

export default function ItemLeftSide({ selectedPhoto }: Props) {
  
  return (
    <section className='item-left-side'>
      <ItemPhoto photo={selectedPhoto} />
    </section>
  );
}