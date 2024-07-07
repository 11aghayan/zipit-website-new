import './ChangePage.css';

type Props = {
  text: string;
  onClick: () => void;
  colored?: boolean;
}

export default function NextBtn({ text, onClick, colored }: Props) {
  
  return (
    <button className={`cart-next-btn ${colored ? 'colored' : ''}`} onClick={onClick}>
      {text}
    </button>
  );
}