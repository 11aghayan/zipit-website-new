import './TopBar.css';

import FiltersBtn from './FiltersBtn/FiltersBtn';
import { useEffect, useRef } from 'react';

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setBarOffset: React.Dispatch<React.SetStateAction<number>>;
}

export default function TopBar({ setIsOpen, setBarOffset }: Props) {

  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const offset = ref?.current?.getBoundingClientRect().bottom as number
    setBarOffset(offset);
  })

  return (
    <section ref={ref} className='top-bar'>
      <FiltersBtn setIsOpen={setIsOpen} />
    </section>
  );
}