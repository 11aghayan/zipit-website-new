import { Link } from "react-router-dom";

import './Logo.css';
import useLang from "../../hooks/useLang";

export default function Logo() {
  const lang = useLang();
  const to = '/' + lang;

  return (
    <Link to={to} reloadDocument className="logo" >
      <img src="/src/assets/logomark.svg" alt="logo" width={50} height={50} />
    </Link>
  );
}