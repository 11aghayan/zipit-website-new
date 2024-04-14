import { useContext } from "react";

import { NavbarContext } from "../context/NavbarContextProvider";

export default function useNavbarContext() {
  return useContext(NavbarContext);
}