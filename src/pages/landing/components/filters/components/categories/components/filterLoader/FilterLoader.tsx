import './FilterLoader.css';

export default function FilterLoader() {

  const arr =  new Array(40).fill(1);
  
  return (
    <div className='filter-loader-container'>
      {
       arr.map((val, i) => (
         <div 
          key={val + i}
          className='filter-loader' 
        />
        ))
      }
    </div>
  );
}