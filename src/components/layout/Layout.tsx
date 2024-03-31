import { Outlet } from "react-router-dom";

import './Layout.css';

import Header from "../header/Header";

export default function Layout() {
  
  return (
    <div className="layout">
      <Header />
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
}