import './Layout.css';

import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";


import Header from "../header/Header";
import BulkAnnouncement from '../bulk_announcement/BulkAnnouncement';

export default function Layout() {
  
  return (
    <div className="layout">
      <Toaster position="top-center" />
      <BulkAnnouncement />
      <Header />
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
}