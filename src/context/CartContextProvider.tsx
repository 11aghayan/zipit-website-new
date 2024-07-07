import { createContext, useEffect, useState } from "react";

import type { CartItemType } from "../types";

export const CartContext = createContext<[CartItemType[], React.Dispatch<React.SetStateAction<CartItemType[]>>]>([[], () => {}]);

type Props = {
  children: React.ReactNode;
};

export default function CartContextProvider({ children }: Props) {
  const memory = JSON.parse(window.localStorage.getItem('cart') || '[]') as CartItemType[];
  const [cart, useCart] = useState<CartItemType[]>(memory);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={[cart, useCart]}>
      {children}
    </CartContext.Provider>
  );
}