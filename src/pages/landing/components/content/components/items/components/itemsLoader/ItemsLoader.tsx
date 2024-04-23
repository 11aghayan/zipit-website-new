import './ItemsLoader.css';

export default function ItemsLoader() {

  const arr = new Array(32).fill(1);

  return (
    <div className='items-loader-container'>
      {
        arr.map((val, i) => (
          <div 
            key={val + i}
            className='item-loader'
          />
        ))
      }
    </div>
  );
}