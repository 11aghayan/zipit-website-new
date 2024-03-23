import { useLocation } from 'react-router-dom';
import './NavItem.css';

type Props = {
  label: string;
  href: string;
}

export default function NavItem({ label, href }: Props) {
  const { pathname } = useLocation();
  const active = pathname.endsWith(href);
  const to = active ? pathname : `${pathname}/${href}`;

  return (
    <li className='nav-item'>
      <a href={to} className={active ? 'disabled active' : ''}>{label}</a>
    </li>
  );
}