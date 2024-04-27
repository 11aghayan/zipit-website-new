import './RightSide.css';

import useLang from '../../../../../../hooks/useLang';
import { ItemType, LangType } from '../../../../../../types';
import ItemDescription from './components/itemDescription/ItemDescription';

type Props = {
  item: ItemType;
}

export default function RightSide({ item }: Props) {
  const lang = useLang() as LangType;

  const langMap = {
    am: 'Նկարագրություն',
    ru: 'Описание'
  };

  return (
    <section className='item-page--right-side'>
      <p className="label">{langMap[lang]}</p>
      <ItemDescription description={item.description} />
    </section>
  );
}