import './ItemSize.css';

import useLang from '../../../../../../../../../../hooks/useLang';
import useSp from '../../../../../../../../../../hooks/useSp';
import { LangType, SizeType } from '../../../../../../../../../../types';


type Props = {
  size: SizeType;
}

export default function ItemSize({ size }: Props) {
  const lang = useLang() as LangType;
  const [sp, setSp] = useSp();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSp({
      ...sp,
      size: e.target.value
    })
  };

  const langMap = {
    am: 'Չափս',
    ru: 'Размер'
  };

  const unitLangMap = {
    mm: {
      am: 'մմ',
      ru: 'мм'
    },
    cm: {
      am: 'սմ',
      ru: 'см'
    },
    m: {
      am: 'մ',
      ru: 'м'
    }
  }

  return (
    <p className='item-size'>
      <span className='label'>{langMap[lang]}:</span>
      <span className='value'>
        <select 
          name="sizes" defaultValue={sp.size} 
          onChange={handleChange}
        >
          {
            size.values.map((val, i) => (
              <option 
                key={`${val}-${i}`}
                value={val}
              >
                {val}
              </option>
            ))
          }
        </select>
        {unitLangMap[size.unit][lang]}
      </span>
    </p>
  );
}