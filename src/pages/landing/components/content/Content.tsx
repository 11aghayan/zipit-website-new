import { useEffect } from 'react';
import { useQuery } from 'react-query';

import './Content.css';

import useLang from '../../../../hooks/useLang';
import { LangType } from '../../../../types';
import getItems from '../../../../actions/getItems';
import Items from './components/items/Items';

type Props = {
  sp: URLSearchParams;
}

export default function Content({ sp }: Props) {
  const lang = useLang() as LangType;
  const spString = sp.toString();
  
  const { isLoading, isError, data, refetch, isFetching } = useQuery('items', getItems(lang, spString));
  
  useEffect(() => {
    refetch();
  }, [spString, refetch])
  
  if (isLoading || isFetching) {
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