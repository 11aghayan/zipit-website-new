import './ItemPromo.css';

type Props = {
  promo: number | null;
}

export default function ItemPromo({ promo }: Props) {

  if (!promo) return null;

  return (
    <p className='item-promo'>{promo}&#x58F;</p>
  );
}