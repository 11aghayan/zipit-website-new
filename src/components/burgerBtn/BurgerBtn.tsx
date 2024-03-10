import './BurgerBtn.css';

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function BurgerBtn({ isOpen, setIsOpen }: Props) {
  const className = isOpen ? 'burger-btn open' : 'burger-btn';

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <button 
      onClick={toggleOpen}
      className={className}  
    >
      <div className="line top-line" />      
      <div className="line mid-line" />      
      <div className="line bottom-line" />      
    </button>
  );
}