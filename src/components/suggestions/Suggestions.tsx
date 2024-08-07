import './Suggestions.css';

import { useEffect, useState } from 'react';

import { LangType, RandomSimilarItemType, RandomSimilarResponseType } from '../../types';
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
  
  const [items, setItems] = useState<RandomSimilarItemType[] | null>(null);
  
  const getItems = type === 'random' ? () => getRandomItems(lang) : () => getSimilarItems(category, name, lang);
  
  useEffect(() => {
    getItems()
      .then((data: RandomSimilarResponseType | null) => {
        if (!data) {
          setItems([]);
          return;
        }
        setItems(data.items)
      })
      .catch(console.error);
  }, []);

  if (items && items.length < 1) return null;
  
  return (
    <section className='suggestions'>
      {
        !items
        ?
        <Loader />
        :
        <Content items={items} />
      }
    </section>
  );
}