import './DeliveryFee.css';

import useLang from "../../../../../../hooks/useLang";
import { LangType } from "../../../../../../types";

type Props = {
  fee: string | null;
}

export default function DeliveryFee({ fee }: Props) {
  const lang = useLang() as LangType;
  
  const label = {
    am: 'Առաքում',
    ru: 'Доставка'
  };
  
  const dram = {
    am: 'դրամ',
    ru: 'Драм'
  };

  const freeMsg = {
    am: 'Անվճար',
    ru: 'Бесплатно'
  }
  
  const valUnit = fee === null ? freeMsg[lang] : `${fee} ${dram[lang]}`;
  
  return (
    <div className="delivery-fee">
      <p>{label[lang]}:</p>
      <p>{valUnit}</p>
    </div>
  );
}