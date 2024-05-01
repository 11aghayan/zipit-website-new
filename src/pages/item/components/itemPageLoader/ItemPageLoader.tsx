import { useMediaQuery } from 'react-responsive';
import './ItemPageLoader.css';

export default function ItemPageLoader() {
  const isTablet = useMediaQuery({ minWidth: 600 });
  const isDesktop = useMediaQuery({ minWidth: 1100 });


  const size = isDesktop ? 500 : isTablet ? 400 : 300;
  
  return (
    <div className='item-page-loader'>
      <section className='left-side-loader'>
        <div className='photo-loader'>
          <div className='photo parent' style={{ height: size, width: size }} />
          <div className='photo-list'>
            <div className='parent' />
            <div className='parent' />
            <div className='parent' />
            <div className='parent' />
            <div className='parent' />
            {
              isDesktop
              ?
              <>
                <div className='parent' />
                <div className='parent' />
                <div className='parent' />
              </>  
              :
              isTablet
              ?
              <>
                <div className='parent' />
                <div className='parent' />
              </>
              :
              null
            }
          </div>
        </div>
        <div className='info-loader'>
          <div className='parent' />
          <div className='parent' />
          <div className='parent' />
          <div className='parent' />
          <div className='price parent' />
        </div>
      </section>
      <section className="right-side-loader">
        <div className="description-loader">
          <div className='parent' />
          <div className='parent' />
          <div className='parent' />
          <div className='parent' />
        </div>
      </section>
    </div>
  );
}