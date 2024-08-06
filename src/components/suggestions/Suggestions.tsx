import './Suggestions.css';

import { useEffect, useState } from 'react';

import { ItemType } from '../../types';

type Props = {
  type: 'random' | 'similar';
};

export default function Suggestions({ type }: Props) {
  const [items, setItems] = useState<ItemType[]>([]);
  
  useEffect(() => {
    // TODO: Get random or similar items
  }, []);
  return (
    <section className='suggestions'>
      Suggestions
    </section>
  );
}