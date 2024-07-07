import useLang from "../../../../../../../../hooks/useLang";

import type { LangType } from "../../../../../../../../types";

type Props = {
  price: number;
  qty: number;
}

export default function CartItemPrice({ price, qty }: Props) {
  const lang = useLang() as LangType;

  const label = {
    am: 'Գին',
    ru: 'Цена'
  };
  
  return (
    <div className="cart-item-elm">
      <p className="label">{label[lang]}:</p>
      <p className="val_unit">{qty * price}&#x58F;</p>
    </div>
  );
}