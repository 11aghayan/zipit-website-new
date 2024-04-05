import { CategoryType } from '../../../../../../types';
import './Categories.css';
import Category from './components/Category/Category';

type Props = {
  categories: CategoryType[]
}

export default function Categories({ categories }: Props) {
  return (
    <ul className='categories'>
      {
        categories.map((category: CategoryType) => (
          <Category 
            key={category.id}
            category={category}
          />
        ))
      }
    </ul>
  );
}