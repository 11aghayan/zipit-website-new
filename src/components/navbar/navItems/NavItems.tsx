import './NavItems.css';
import NavItem from './navItem/NavItem';
import navRoutes from '../../../utils/navRoutes';
import { LangType, NavRouteType } from '../../../types';
import useLang from '../../../hooks/useLang';

export default function NavItems() {
  const lang = useLang() as LangType;

  return (
    <ul className='nav-items'>
      {
        navRoutes.map((route: NavRouteType) => (
          <NavItem 
            key={route.href}
            href={route.href}
            label={route.label[lang]}
          />
        ))
      }
    </ul>
  );
}