import { createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
}

type NavbarContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavbarContext = createContext<NavbarContextType>({ 
  isOpen: false,
  setIsOpen: () => {}
 });

export default function NavbarContextProvider({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  


  return (
    <NavbarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </NavbarContext.Provider>
  );
}