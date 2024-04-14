import './PageNav.css';

import { ItemsResponseType, SpType } from '../../../../../../types';
import useSp from '../../../../../../hooks/useSp';

type Props = {
  data: ItemsResponseType | undefined;
  isFetching: boolean;
}

export default function PageNav({ data, isFetching }: Props) {
  const [sp, setSp] = useSp();

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
    <div className='pageNav'>
      <button 
        className='prev'
        disabled={isFetching || !data || data.page <=1}
        onClick={handlePrev}
      >
        Prev
      </button>
      <button 
        className='next'
        disabled={isFetching || !data || data.page >= data.pages}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
}