import { useQuery } from 'react-query';

import './Content.css';

import useLang from '../../../../hooks/useLang';
import { LangType } from '../../../../types';
import getItems from '../../../../actions/getItems';
import Items from './components/items/Items';
import { useSearchParams } from 'react-router-dom';

export default function Content() {
  const [sp] = useSearchParams();
  const lang = useLang() as LangType;
  
  const { isLoading, isError, data } = useQuery('items', getItems(lang, sp.toString()));
  
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