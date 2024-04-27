import { LangType, MinOrderType } from "../types";

export default function minOrderUnit(lang: LangType, minOrder: MinOrderType) {
  const qtyString = minOrder.qty.toString();
  const qtyLastDigit = Number(qtyString[qtyString.length - 1]);
  const specialNumbers = [2, 3, 4];
  const exceptions = [12, 13, 14];
  const isLastDigitSpecial = specialNumbers.includes(qtyLastDigit) && !exceptions.includes(minOrder.qty);
  
  const unitLangMap = {
    pcs: {
      am: 'հատ',
      ru: 'шт.'
    },
    cm: {
      am: 'սմ',
      ru: 'см'
    },
    box: {
      am: 'տուփ',
      ru: minOrder.qty === 1 ? 'коробка' : isLastDigitSpecial ? 'коробки' : 'коробок'
    },
    roll: {
      am: 'ռուլոն',
      ru: minOrder.qty === 1 ? 'рулон' : isLastDigitSpecial ? 'рулона' : 'рулонов'
    }
  }

  return unitLangMap[minOrder.unit][lang];
}