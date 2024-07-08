import './ChangePage.css';

type Props = {
  text: string;
  onClick: () => void;
  colored?: boolean;
  disabled?: boolean;
}

export default function NextBtn({ text, onClick, colored, disabled }: Props) {
  
  return (
    <button 
      className={`cart-next-btn ${colored ? 'colored' : ''}`} 
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}