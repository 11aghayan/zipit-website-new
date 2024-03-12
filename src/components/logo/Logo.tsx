import { Link } from "react-router-dom";

import './Logo.css';

export default function Logo() {

  return (
    <Link to='/' reloadDocument className="logo" >
      <img src="/src/assets/logomark.svg" alt="logo" width={50} height={50} />
    </Link>
  );
}