import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import './ItemPage.css';

import getItem from '../../actions/getItem';
import useLang from '../../hooks/useLang';
import { LangType } from '../../types';
import Item from './components/item/Item';
import ItemPageLoader from './components/itemPageLoader/ItemPageLoader';
import ServerErrorMsg from '../../components/serverErrorMsg/ServerErrorMsg';

export default function ItemPage() {
  const lang = useLang() as LangType;
  const id = useParams()?.id || '';

  const { isLoading, isError, data } = useQuery('items', getItem(lang, id));
  
  if (isLoading) {
    return (
      <Main>
        <ItemPageLoader />
      </Main>
    )
  }

  if (isError || !data) {
    return (
      <Main>
        <ServerErrorMsg />
      </Main>
    );
  }
  
  return (
    <Main>
      <Item item={data} />
    </Main>
  );
}

type MainProps = {
  children: React.ReactNode;
}

function Main({ children }: MainProps) {
  return (
    <main className="item-page">
      {children}
    </main>
  );
}