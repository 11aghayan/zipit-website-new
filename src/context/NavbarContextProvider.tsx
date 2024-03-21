import { createContext, useEffect, useState } from "react";

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
  
  useEffect(() => {
    const body = document.getElementsByTagName('body')[0];
    if (isOpen) {
      body.classList.add('no-scroll');
    } else {
      body.classList.remove('no-scroll');
    }
  }, [isOpen])

  return (
    <NavbarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </NavbarContext.Provider>
  );
}