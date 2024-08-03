import './ItemSize.css';

import useLang from '../../../../../../../../../../hooks/useLang';
import useSp from '../../../../../../../../../../hooks/useSp';
import { LangType, SizeUnitType, SizeValueType } from '../../../../../../../../../../types';
import { useEffect } from 'react';


type Props = {
  size: { values: (SizeValueType & { available: boolean })[], unit: SizeUnitType };
  isSizeAvailable: boolean;
  setIsSizeAvailable: React.Dispatch<React.SetStateAction<boolean>>;
  activeSize: SizeValueType & { available: boolean };
  setActiveSize: React.Dispatch<React.SetStateAction<SizeValueType & { available: boolean }>>;
  defaultValue: string;
  color: string;
}

export default function ItemSize({ size, isSizeAvailable, setIsSizeAvailable, activeSize, setActiveSize, defaultValue, color }: Props) {
  const lang = useLang() as LangType;
  const [sp, setSp] = useSp();
  const sizePhotoIndex = lang === 'am' ? 0 : 1;
  
  useEffect(() => {
    setIsSizeAvailable(activeSize?.available || false);
  }, [activeSize, setIsSizeAvailable]);
  
  useEffect(() => {
    setActiveSize({
      ...activeSize,
      available: activeSize.colors.map(color => color.split('&dash&')[sizePhotoIndex]).includes(color)
    });
  }, [color])
  
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
          onChange={handleChange}
          className={`${!isSizeAvailable ? 'disabled' : ''}`}
          defaultValue={defaultValue.toString()}
        >
          {
            size.values.map(({ value, available }, i) =>  (
                <option 
                  key={`${value}-${i}`}
                  value={value}
                  disabled={!available}
                >
                  {value}
                </option>
              )
            )
          }
        </select>
        {unitLangMap[size.unit][lang]}
      </span>
    </p>
  );
}