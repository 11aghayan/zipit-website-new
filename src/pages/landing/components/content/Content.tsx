import './Content.css';

export default function Content() {
  
  return (
    <section className='content' >
      {[1,2,3,4,5].map(i => (
          <div 
            key={i}
            style={{ height: '300px', backgroundColor: '#777777' }}
          />
      ))}
    </section>
  );
}