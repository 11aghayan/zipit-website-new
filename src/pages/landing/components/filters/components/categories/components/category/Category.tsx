import useSp from '../../../../../../../../hooks/useSp';
import { CategoryType, SpType } from '../../../../../../../../types';
import { SelectedFiltersType } from '../../Categories';
import './Category.css';

type Props = {
  category: CategoryType;
  selectedFilters: SelectedFiltersType;
  setSelectedFilters: React.Dispatch<React.SetStateAction<SelectedFiltersType>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Category({ category, selectedFilters, setSelectedFilters, setIsOpen }: Props) {
  const [sp, setSp] = useSp();
  const selected = selectedFilters.categories.includes(category.id);
  
  const handleClick = () => {
    setIsOpen(false);
    let categories;
    if (selected) {
      categories = selectedFilters.categories.filter(c => c !== category.id);
    } else {
      categories = [ ...selectedFilters.categories, category.id ];
    }

    setSelectedFilters({ ...selectedFilters, categories });

    const newSp: SpType = {
      ...sp,
      categories: categories.join(',')
    };

    if (!categories.length) delete newSp.categories;
    setSp(newSp);
  }
  
  return (
    <li className={`category ${selected ? 'selected' : ''}`} onClick={handleClick}>
      <p>{category.label}</p>
      <p>({category.itemsQty})</p>
    </li>
  );
}