import { CategoryType } from '../../../../../../../../types';
import { SelectedFiltersType } from '../../Categories';
import './Category.css';

type Props = {
  category: CategoryType;
  selectedFilters: SelectedFiltersType;
  setSelectedFilters: React.Dispatch<React.SetStateAction<SelectedFiltersType>>;
}

export default function Category({ category, selectedFilters, setSelectedFilters }: Props) {

  const selected = selectedFilters.categories.includes(category.id);
  
  const handleClick = () => {
    let categories;
    if (selected) {
      categories = selectedFilters.categories.filter(c => c !== category.id);
    } else {
      categories = [ ...selectedFilters.categories, category.id ];
    }

    setSelectedFilters({ ...selectedFilters, categories });
  }
  
  return (
    <li className={`category ${selected ? 'selected' : ''}`} onClick={handleClick}>
      <p>{category.label}</p>
      <p>({category.itemsQty})</p>
    </li>
  );
}