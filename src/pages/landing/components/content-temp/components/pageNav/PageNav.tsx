import { Icon } from '@iconify/react/dist/iconify.js';

import './PageNav.css';

import { ItemsResponseType, LangType, SpType } from '../../../../../../types';
import useSp from '../../../../../../hooks/useSp';
import useLang from '../../../../../../hooks/useLang';

type Props = {
  data: ItemsResponseType | undefined;
  isFetching: boolean;
}

export default function PageNav({ data, isFetching }: Props) {
  const lang = useLang() as LangType;
  
  const [sp, setSp] = useSp();

  const langMap = {
    am: 'Էջ',
    ru: 'Стр'
  };

  const handlePrev = () => {
    if (data && data.page > 1) {
      const newSp: SpType = {
        ...sp,
        page: (data.page - 1).toString()
      };

      if (newSp.page === '1') delete newSp.page;
      
      setSp(newSp);
    }
  };

  const handleNext = () => {
    if (data && data.page < data.pages) {
      const newSp: SpType = {
        ...sp,
        page: (data.page + 1).toString()
      };

      if (newSp.page === '1') delete newSp.page;
      
      setSp(newSp);
    }
  };
  
  return (
    <div className='page-nav'>
      <button 
        className='prev'
        aria-label='previous page button'
        disabled={isFetching || !data || data.page <=1}
        onClick={handlePrev}
      >
        <Icon icon='ic:round-arrow-back-ios' />
      </button>
      <p className={`current-page ${isFetching || !data || data.page === data.pages ? 'disabled' : ''}`}>
        <span>{langMap[lang]}:</span>
        <span>{data?.page || 1}/{data?.pages || 1}</span>
      </p>
      <button 
        className='next'
        aria-label='next page button'
        disabled={isFetching || !data || data.page >= data.pages}
        onClick={handleNext}
      >
        <Icon icon='ic:round-arrow-forward-ios' />
      </button>
    </div>
  );
}