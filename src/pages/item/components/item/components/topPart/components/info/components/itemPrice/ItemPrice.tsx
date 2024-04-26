import './ItemPrice.css';

type Props = {
  price: number;
  promo: number | null;
}

export default function ItemPrice({ price, promo }: Props) {
  
  return (
    <div className="item-price">
      <p>{price}&#x58F;</p>
      {
        promo 
        ?
        <p>{promo}&#x58F;</p>
        :
        null
      }
    </div>
  );
}