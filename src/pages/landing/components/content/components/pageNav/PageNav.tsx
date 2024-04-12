import { SetURLSearchParams } from 'react-router-dom';
import { ItemsResponseType } from '../../../../../../types';
import './PageNav.css';

type Props = {
  data: ItemsResponseType | undefined;
  sp: URLSearchParams;
  setSp: SetURLSearchParams;
  isFetching: boolean;
}

export default function PageNav({ data, sp, setSp, isFetching }: Props) {

  const handlePrev = () => {
    if (data && data.page > 1) {
      setSp({
        ...sp,
        page: (data.page - 1).toString()
      });
    }
  };

  const handleNext = () => {
    if (data && data.page < data.pages) {
      setSp({
        ...sp,
        page: (data.page + 1).toString()
      });
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