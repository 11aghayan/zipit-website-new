import { useLocation } from 'react-router-dom';
import './NavItem.css';
import useLang from '../../../../hooks/useLang';

type Props = {
  label: string;
  href: string;
}

export default function NavItem({ label, href }: Props) {
  const lang = useLang();
  const { pathname } = useLocation();
  const active = pathname.endsWith(href);
  const to = `/${lang}/${href}`;

  return (
    <li className='nav-item'>
      <a href={to} className={active ? 'disabled active' : ''}>{label}</a>
    </li>
  );
}