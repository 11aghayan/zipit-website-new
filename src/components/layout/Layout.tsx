import './Layout.css';

import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";


import Header from "../header/Header";

export default function Layout() {
  
  return (
    <div className="layout">
      <Toaster position="top-center" />
      <Header />
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
}