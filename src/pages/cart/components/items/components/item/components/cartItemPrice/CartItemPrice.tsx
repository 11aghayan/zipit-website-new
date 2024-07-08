import useLang from "../../../../../../../../hooks/useLang";

import type { LangType } from "../../../../../../../../types";
import formatPrice from "../../../../../../../../utils/formatPrice";

type Props = {
  price: number;
  qty: number;
  minOrder: number;
}

export default function CartItemPrice({ price, qty, minOrder }: Props) {
  const lang = useLang() as LangType;

  const label = {
    am: 'Գին',
    ru: 'Цена'
  };
  
  const formattedPrice = formatPrice(price * qty * minOrder);
  
  return (
    <div className="cart-item-elm">
      <p className="label">{label[lang]}:</p>
      <p className="val_unit">{formattedPrice}&#x58F;</p>
    </div>
  );
}