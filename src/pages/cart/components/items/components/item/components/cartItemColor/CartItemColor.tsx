import useLang from "../../../../../../../../hooks/useLang";
import { LangType } from "../../../../../../../../types";

type Props = {
  color: string;
}

export default function CartItemColor({ color }: Props) {
  const lang = useLang() as LangType;
  
  const label = {
    am: 'Գույն',
    ru: 'Цвет'
  };
  
  return (
    <div className='cart-item-elm cart-item-color'>
      <p className='label'>{label[lang]}:</p>
      <p className='unit_val'>{color}</p>
    </div>
  );
}