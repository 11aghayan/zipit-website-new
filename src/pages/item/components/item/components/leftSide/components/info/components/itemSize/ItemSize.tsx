import './ItemSize.css';

import useLang from '../../../../../../../../../../hooks/useLang';
import useSp from '../../../../../../../../../../hooks/useSp';
import { LangType, SizeType, SizeValueType } from '../../../../../../../../../../types';
import { useEffect, useState } from 'react';


type Props = {
  size: SizeType;
  isSizeAvailable: boolean;
  setIsSizeAvailable: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ItemSize({ size, isSizeAvailable, setIsSizeAvailable }: Props) {
  size.values.sort((a, b) => a.available < b.available ? 1 : -1);
  const lang = useLang() as LangType;
  const [sp, setSp] = useSp();
  
  const firstAvailable = (size.values.find(v => v.available)?.value || size.values[0].value).toString();
  const defaultValue = sp.size || firstAvailable;
  const defaultActive = size.values.find(v => v.value === Number(defaultValue))!;
  const [activeSize, setActiveSize] = useState<SizeValueType>(defaultActive);

  useEffect(() => {
    setIsSizeAvailable(activeSize?.available);
  }, [activeSize, setIsSizeAvailable]);
  
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSize = size.values.find(v => v.value === Number(e.target.value))!;
    setActiveSize(newSize);
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
          name="sizes" 
          defaultValue={defaultValue} 
          onChange={handleChange}
          className={`${!isSizeAvailable ? 'disabled' : ''}`}
        >
          {
            size.values.map(({ value, available }, i) => (
              <option 
                key={`${value}-${i}`}
                value={value}
                disabled={!available}
              >
                {value}
              </option>
            ))
          }
        </select>
        {unitLangMap[size.unit][lang]}
      </span>
    </p>
  );
}