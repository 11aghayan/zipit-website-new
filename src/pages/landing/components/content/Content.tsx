import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';

import './Content.css';

import useLang from '../../../../hooks/useLang';
import { ItemsResponseType, LangType } from '../../../../types';
import getItems from '../../../../actions/getItems';
import Items from './components/items/Items';
import PageNav from './components/pageNav/PageNav';
import ServerErrorMsg from '../../../../components/serverErrorMsg/ServerErrorMsg';
import ItemsLoader from './components/items/components/itemsLoader/ItemsLoader';
import Suggestions from '../../../../components/suggestions/Suggestions';

export default function Content() {
  const lang = useLang() as LangType;
  const [sp] = useSearchParams();
  const spString = sp.toString();
  
  const { isLoading, isError, data, refetch, isFetching } = useQuery('items', getItems(lang, spString));
  
  useEffect(() => {
    refetch();
  }, [spString, refetch])
  
  if (isLoading || isFetching) {
    return ( 
      <Section data={data} isFetching={isFetching}>
          <ItemsLoader />
      </Section>
    )
  }
  
  if (isError) {
    return ( 
      <Section data={data} isFetching={isFetching}>
        <ServerErrorMsg />
      </Section>
    )
  }
  
  return (
    <Section data={data} isFetching={isFetching}>
      <Items items={data?.items || []} />
    </Section>
  );
}

type SectionProps = {
  children: React.ReactNode;
  data: ItemsResponseType | undefined;
  isFetching: boolean;
}

function Section({ children, data, isFetching }: SectionProps) {
  
  return(
    <section className='content'>
      <section className='top-section'>
        <Suggestions type='random' />
        { children }
      </section>
      <PageNav 
        data={data}
        isFetching={isFetching}
      />
    </section>
  )
}