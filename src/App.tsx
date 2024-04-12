import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import router from "./router/router";
import LangContextProvider from "./context/LangContextProvider";
import NavbarContextProvider from "./context/NavbarContextProvider";

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
          <NavbarContextProvider>
            <RouterProvider router={router} />
          </NavbarContextProvider>
        </LangContextProvider>
      </QueryClientProvider>
    </div>
  );
}