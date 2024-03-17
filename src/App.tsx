import { RouterProvider } from "react-router-dom";

import router from "./router/router";
import LangContextProvider from "./context/LangContextProvider";
import NavbarContextProvider from "./context/NavbarContextProvider";

export default function App() {
  
  return (
    <div className="font-arm">
      <LangContextProvider>
        <NavbarContextProvider>
          <RouterProvider router={router} />
        </NavbarContextProvider>
      </LangContextProvider>
    </div>
  );
}