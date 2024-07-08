import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import router from "./router/router";
import LangContextProvider from "./context/LangContextProvider";
import NavbarContextProvider from "./context/NavbarContextProvider";
import CartContextProvider from "./context/CartContextProvider";

export default function App() {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  });

  return (
    <div className="font-arm">
      <QueryClientProvider client={queryClient}>
        <LangContextProvider>
          <CartContextProvider>
            <NavbarContextProvider>
              <RouterProvider router={router} />
            </NavbarContextProvider>
          </CartContextProvider>
        </LangContextProvider>
      </QueryClientProvider>
    </div>
  );
}