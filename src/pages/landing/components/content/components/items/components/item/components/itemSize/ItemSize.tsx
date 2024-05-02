import './ItemSize.css';

import { LangType, SizeType } from '../../../../../../../../../../types';
import sizeLangMap from '../../../../../../../../../../utils/sizeLangMap';
import useLang from '../../../../../../../../../../hooks/useLang';

type Props = {
  size: SizeType;
}

export default function ItemSize({ size }: Props) {
  const lang = useLang() as LangType;
  
  return (
    <p className='item-size'>
      <span className='item-size--val'>
        {size.val}
      </span>
      <span className='item-size--unit'>
        {sizeLangMap[size.unit][lang]}
      </span>
    </p>
  );
}