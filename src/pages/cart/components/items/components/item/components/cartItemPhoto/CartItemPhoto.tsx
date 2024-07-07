import './CartItemPhoto.css';

type Props = {
  src: string;
}

export default function CartItemPhoto({ src }: Props) {
  
  
  return (
    <div className="cart-item-photo">
      <img 
        src={src} alt="Item Photo" 
        height={100}
        width={100}
      />
    </div>
  );
}