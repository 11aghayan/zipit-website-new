import ItemPromo from '../itemPromo/ItemPromo';
import './ItemPrice.css';

type Props = {
  price: number;
  promo: number | null;
}

export default function ItemPrice({ price, promo }: Props) {

  return (
    <section className='item-price'>
      <p className={`${promo ? 'old' : ''}`}>{price}&#x58F;</p>
      <ItemPromo promo={promo} />
    </section>
  );
}