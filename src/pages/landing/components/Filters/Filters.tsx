import { useQuery } from 'react-query';

import './Filters.css';

import getCategories from '../../../../actions/getCategories';
import useLang from '../../../../hooks/useLang';
import { LangType } from '../../../../types';
import Categories from './components/categories/Categories';
import CloseBtn from './components/closeBtn/CloseBtn';

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Filters({ isOpen, setIsOpen }: Props) {

  const lang = useLang() as LangType;
  
  const { isLoading, isError, data } = useQuery('filters', getCategories(lang));
  
  if (isLoading) {
    return ( 
      <Aside isOpen={isOpen} setIsOpen={setIsOpen}>
          <p>Loading...</p>
      </Aside>
    )
  }

  if (isError) {
    return ( 
      <Aside isOpen={isOpen} setIsOpen={setIsOpen}>
        <p>Error 500</p>
      </Aside>
    )
  }
  
  return (
    <Aside isOpen={isOpen} setIsOpen={setIsOpen}>
      <Categories categories={data} />
    </Aside>
  );
}


type AsideProps = {
  children: React.ReactNode;
} & Props

function Aside({ children, setIsOpen, isOpen }: AsideProps) {
  return(
    <aside className={`filters ${isOpen && 'open'}`}>
      <CloseBtn isOpen={isOpen} setIsOpen={setIsOpen} />
      { children }
    </aside>
  )
}