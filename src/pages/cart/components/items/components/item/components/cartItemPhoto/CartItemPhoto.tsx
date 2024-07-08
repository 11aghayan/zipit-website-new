import './CartItemPhoto.css';

type Props = {
  src: string;
}

export default function CartItemPhoto({ src }: Props) {
  
  
  return (
    <div className="cart-item-photo">
      <img 
        src={src} alt="Item Photo" 
        height={80}
        width={80}
      />
    </div>
  );
}