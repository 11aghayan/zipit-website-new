import './Suggestions.css';

import { useQuery } from 'react-query';

import type { LangType } from '../../types';
import getRandomItems from '../../actions/getRandomItems';
import getSimilarItems from '../../actions/getSimilarItems';
import useLang from '../../hooks/useLang';
import Loader from './components/loader/Loader';
import Content from './components/content/Content';

type Props = {
  type: 'random' | 'similar';
  name?: string;
  category?: string;
};

export default function Suggestions({ type, name = '', category = '' }: Props) {
  const lang = useLang() as LangType;
  
  const getItems = type === 'random' ? () => getRandomItems(lang) : () => getSimilarItems(category, name, lang);

  const { isLoading, isError, data } = useQuery(`${type}-items`, getItems);

  if (!isLoading && (!data || data.length < 1)) return null;

  const header = {
    random: {
      am: 'Թեժ առաջարկներ',
      ru: 'Горячие предложения'
    },
    similar: {
      am: 'Նման ապրանքներ',
      ru: 'Похожие товары'
    }
  }
  
  return (
    <section className={`suggestions ${isLoading ? 'loading' : ''}`}>
      {
        isError
        ?
        null
        :
        <>
          <p className='header'>{header[type][lang]}</p>
          {
            isLoading
            ?
            <Loader />
            :      
            <Content items={data.items} />
          }
        </>
      }
    </section>
  );
}