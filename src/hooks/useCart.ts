import { useContext } from "react";

import { CartContext } from "../context/CartContextProvider";

export default function useCart() {
  return useContext(CartContext);
}