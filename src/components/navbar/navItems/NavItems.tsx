import './NavItems.css';
import NavItem from './navItem/NavItem';
import navRoutes from '../../../utils/navRoutes';
import { NavRouteType } from '../../../types';

export default function NavItems() {
  const lang = 'am';

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