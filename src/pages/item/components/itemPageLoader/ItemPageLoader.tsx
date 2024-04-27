import './ItemPageLoader.css';

export default function ItemPageLoader() {

  return (
    <div className='item-page-loader'>
      <section className='left-side-loader'>
        <div className='photo-loader'>
          <div className='photo parent' />
          <div className='photo-list'>
            <div className='parent' />
            <div className='parent' />
            <div className='parent' />
            <div className='parent' />
            <div className='parent' />
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