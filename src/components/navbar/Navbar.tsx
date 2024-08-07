import useNavbarContext from '../../hooks/useNavbarContext';
import './Navbar.css';
import CartBtn from './cartBtn/CartBtn';
import Language from './language/Language';
import NavItems from './navItems/NavItems';

export default function Navbar() {  
  const { isOpen } = useNavbarContext();
  
  const className = isOpen ? 'open' : '';

  return (
    <nav className={className}>
      <Language />
      <NavItems />
      <CartBtn />
    </nav>
  );
}