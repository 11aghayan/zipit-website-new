import BurgerBtn from '../burgerBtn/BurgerBtn';
import Logo from '../logo/Logo';
import './Header.css';
import Navbar from '../navbar/Navbar';

export default function Header() {

  return (
    <header>
      <Logo />
      <Navbar />
      <BurgerBtn />
    </header>
  );
}