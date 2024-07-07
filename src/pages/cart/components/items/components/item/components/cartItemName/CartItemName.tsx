import useLang from "../../../../../../../../hooks/useLang";
import { LangType } from "../../../../../../../../types";

type Props = {
  name: string;
}

export default function CartItemName({ name }: Props) {
  const lang = useLang() as LangType;

  const label = {
    am: 'Ապրանք',
    ru: 'Товар'
  };
  
  return (
    <div className="cart-item-elm cart-item-name">
      <p className="label">{label[lang]}:</p>
      <p className="val_unit">{name}</p>
    </div>
  );
}