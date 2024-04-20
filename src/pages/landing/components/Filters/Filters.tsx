import { useQuery } from 'react-query';

import './Filters.css';

import getCategories from '../../../../actions/getCategories';
import useLang from '../../../../hooks/useLang';
import { LangType } from '../../../../types';
import Categories from './components/categories/Categories';
import CloseBtn from './components/closeBtn/CloseBtn';
import FilterLoader from './components/categories/components/filterLoader/FilterLoader';

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Filters({ isOpen, setIsOpen }: Props) {
  const lang = useLang() as LangType;
  
  const { isLoading, isError, data } = useQuery('filters', getCategories(lang));
  
  if (isLoading) {
    return ( 
      <Aside isOpen={isOpen} setIsOpen={setIsOpen} noScroll={false}>
        <FilterLoader />
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
      <Categories 
        categories={data}
        setIsOpen={setIsOpen}
      />
    </Aside>
  );
}


type AsideProps = {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  noScroll?: boolean;
}

function Aside({ children, setIsOpen, isOpen, noScroll = false }: AsideProps) {
  return(
    <aside className={`filters ${isOpen ? 'open' : ''} ${noScroll ? 'no-scroll' : ''}`}>
      <CloseBtn isOpen={isOpen} setIsOpen={setIsOpen} />
      { children }
    </aside>
  )
}