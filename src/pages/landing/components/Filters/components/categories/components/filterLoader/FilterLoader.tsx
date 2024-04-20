import './FilterLoader.css';

export default function FilterLoader() {

  const arr =  new Array(14).fill(1);
  
  return (
    <div className='filter-loader-container'>
      {
       arr.map((val, i) => (
          <div 
            key={val + i}
            className={`filter-loader-wrapper ${i === 0 || i === arr.length - 1 ? 'rounded' : ''}`}
            
          >
            <div className='filter-loader' />
          </div>
        ))
      }
    </div>
  );
}