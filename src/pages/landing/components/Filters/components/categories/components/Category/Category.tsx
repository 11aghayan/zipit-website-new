import { CategoryType } from '../../../../../../../../types';
import './Category.css';

type Props = {
  category: CategoryType;
}

export default function Category({ category }: Props) {

  return (
    <li className='category'>
      <p>{category.label}</p>
      <p>({category.itemsQty})</p>
    </li>
  );
}