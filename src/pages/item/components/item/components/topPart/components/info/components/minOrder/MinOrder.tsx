import './MinOrder.css';

import useLang from '../../../../../../../../../../hooks/useLang';
import { LangType, MinOrderType } from '../../../../../../../../../../types';


type Props = {
  minOrder: MinOrderType;
}

export default function MinOrder({ minOrder }: Props) {
  const lang = useLang() as LangType;

  const langMap = {
    am: 'Նվազագույն պատվեր',
    ru: 'Минимальный заказ'
  };

  return (
    <p className='min-order'>
      <span>{langMap[lang]}:</span>
      <span>{minOrder.qty}{minOrder.unit}</span>
    </p>
  );
}