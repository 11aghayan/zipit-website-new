import './Navbar.css';
import LanguageSwitcher from './languageSwitcher/LanguageSwitcher';
import NavItems from './navItems/NavItems';

type Props = {
  isOpen: boolean;
}

export default function Navbar({ isOpen }: Props) {
  const className = isOpen ? 'open' : '';

  return (
    <nav className={className}>
      <LanguageSwitcher />
      <NavItems />
    </nav>
  );
}