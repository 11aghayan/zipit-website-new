import useLang from '../../../../../../../../../../hooks/useLang';
import { LangType, MinOrderType } from '../../../../../../../../../../types';
import minOrderUnit from '../../../../../../../../../../utils/minOrderUnit';


type Props = {
  minOrder: MinOrderType;
}

export default function MinOrder({ minOrder }: Props) {
  const lang = useLang() as LangType;

  const labelLangMap = {
    am: 'Նվազագույն պատվեր',
    ru: 'Минимальный заказ'
  };

  const unit = minOrderUnit(lang, minOrder);

  return (
    <p className='min-order'>
      <span className='label'>{labelLangMap[lang]}:</span>
      <span className='value'>{minOrder.qty} {unit}</span>
    </p>
  );
}