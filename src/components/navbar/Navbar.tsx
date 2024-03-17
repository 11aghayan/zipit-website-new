import useNavbarContext from '../../hooks/useNavbarContext';
import './Navbar.css';
import LanguageSwitcher from './languageSwitcher/LanguageSwitcher';
import NavItems from './navItems/NavItems';

export default function Navbar() {  
  const { isOpen } = useNavbarContext();
  
  const className = isOpen ? 'open' : '';

  return (
    <nav className={className}>
      <LanguageSwitcher />
      <NavItems />
    </nav>
  );
}