import { useQuery } from 'react-query';

import './Content.css';

import useLang from '../../../../hooks/useLang';
import { LangType } from '../../../../types';
import getItems from '../../../../actions/getItems';
import Items from './components/items/Items';

export default function Content() {

  const lang = useLang() as LangType;
  
  const { isLoading, isError, data } = useQuery('items', getItems(lang));
  
  if (isLoading) {
    return ( 
      <Section>
          <p>Loading...</p>
      </Section>
    )
  }
  
  if (isError) {
    return ( 
      <Section>
        <p>Error 500</p>
      </Section>
    )
  }
  
  return (
    <Section>
      <Items items={data.items} />
    </Section>
  );
}

type SectionProps = {
  children: React.ReactNode;
}

function Section({ children }: SectionProps) {
  return(
    <section className='content'>
      { children }
    </section>
  )
}