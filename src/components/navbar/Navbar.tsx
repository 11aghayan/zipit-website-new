import './Navbar.css';

type Props = {
  isOpen: boolean;
}

export default function Navbar({ isOpen }: Props) {
  const className = isOpen ? 'open' : '';

  return (
    <nav className={className}>
      Navbar
    </nav>
  );
}