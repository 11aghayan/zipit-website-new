import { Link } from "react-router-dom";

import logo from '../../assets/logo-light-theme.svg';
import useLang from "../../hooks/useLang";

export default function Logo() {
  const lang = useLang();
  const to = '/' + lang;

  return (
    <Link to={to} reloadDocument className="logo" >
      <img src={logo} alt="zipit logo" width={210} height={50} />
    </Link>
  );
}