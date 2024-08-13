import './Item.css';

import { LangType, RandomSimilarItemType } from '../../../../../../types';
import sizeLangMap from '../../../../../../utils/sizeLangMap';
import useLang from '../../../../../../hooks/useLang';

type Props = {
  item: RandomSimilarItemType;
  photoSize: 90 | 110 | 130;
}

export default function Item({ item: { id, photo, name, price, promo, size }, photoSize }: Props) {
  const lang = useLang() as LangType;
  
  const href = `${lang}/${id}`;
  
  return (
    <a 
      href={href}
      className='suggestion-item' 
      style={{ minWidth: photoSize + 40 }}
    >
      <div className='photo' style={{ height: photoSize, width: photoSize }}>
        <img src={photo.src} alt="Item photo" height={photoSize} width={photoSize} />
      </div>
      <p className='name'>{name}</p>
      <p className='color'>{photo.color}</p>
      <p className='size'>{size.value}{sizeLangMap[size.unit][lang]}</p>
      <p className='price'>
        <span className={`price ${promo ? 'line-through' : ''}`}>{price}&#x58F;</span>
        <span className={`promo ${promo ? 'visible' : ''}`}>{promo}&#x58F;</span>
      </p>
    </a>
  );
}