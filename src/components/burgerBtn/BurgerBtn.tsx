import useNavbarContext from '../../hooks/useNavbarContext';
import './BurgerBtn.css';

export default function BurgerBtn() {
  const {isOpen, setIsOpen} = useNavbarContext();

  const className = isOpen ? 'burger-btn open' : 'burger-btn';

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <button 
      onClick={toggleOpen}
      className={className} 
      aria-label='nav menu button'
    >
      <div className="line top-line" />      
      <div className="line mid-line" />      
      <div className="line bottom-line" />      
    </button>
  );
}