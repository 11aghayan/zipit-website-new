import { useState } from 'react';

import BurgerBtn from '../burgerBtn/BurgerBtn';
import Logo from '../logo/Logo';
import './Header.css';
import Navbar from '../navbar/Navbar';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header>
      <Logo />
      <Navbar isOpen={isNavOpen} />
      <BurgerBtn isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
    </header>
  );
}