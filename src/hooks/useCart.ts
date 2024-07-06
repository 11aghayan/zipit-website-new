import { CartItemType } from "../types";

const cart = JSON.parse(window.localStorage.getItem('cart') || '[]') as CartItemType[];

function setCart(fn: (prev: CartItemType[]) =>  CartItemType[]) {
  window.localStorage.setItem('cart', JSON.stringify(fn(cart)));
}

type CartFullType = [CartItemType[], (fn: (prev: CartItemType[]) => CartItemType[]) => void];

export default function useCart() {
  return [cart, setCart] as CartFullType;
}