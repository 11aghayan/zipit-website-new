import './ItemSize.css';

import { LangType, SizeType } from '../../../../../../../../../../types';
import sizeLangMap from '../../../../../../../../../../utils/sizeLangMap';
import useLang from '../../../../../../../../../../hooks/useLang';

type Props = {
  size: SizeType;
  color: string;
}

export default function ItemSize({ size, color }: Props) {
  const lang = useLang() as LangType;
  const colorIndex = lang === 'am' ? 0 : 1;
  
  const noSizes = {
    am: 'Առկա չափսեր չկան',
    ru: 'Нет доступных размеров'
  };
  
  const availableSizes = size.values.reduce((prev: number[], val) => {
    const colors = val.colors.map(color => color.split('&dash&')[colorIndex]);
    if (colors.includes(color)) return [...prev, val.value];
    return prev;
  }, [])

  availableSizes.sort();
  
  return (
    <p className='item-size'>
      <span className={`item-size--val ${availableSizes.length < 0 ? 'no_sizes' : ''}`}>
        {availableSizes.length > 0 ? availableSizes.join(', ') : noSizes[lang]}
      </span>
      <span className='item-size--unit'>
        {availableSizes.length > 0 ? sizeLangMap[size.unit][lang] : null}
      </span>
    </p>
  );
}