import { Link } from "react-router-dom";

import './Logo.css';

import logo from '../../assets/logo-light-theme.svg';
import useLang from "../../hooks/useLang";

export default function Logo() {
  const lang = useLang();
  const to = '/' + lang;

  const size = 50;
  
  return (
    <Link to={to} reloadDocument className="logo">
      <div className="logo-img-wrapper">
        <img src={logo} alt="zipit logo" width={size} height={size} />
      </div>
      <h1 className="font-en">ZIPIT</h1>
    </Link>
  );
}