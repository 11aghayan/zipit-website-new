import useLang from "../../../../../../../../hooks/useLang";
import { LangType } from "../../../../../../../../types";

type Props = {
  value: number;
  unit: string;
}

export default function CartItemSize({ value, unit }: Props) {
  const lang = useLang() as LangType;

  const label = {
    am: 'Չափ',
    ru: 'Размер'
  };

  return (
    <div className='cart-item-elm'>
      <p className='label'>{label[lang]}:</p>
      <p className='val_unit'>{value}{unit}</p>
    </div>
  );
}