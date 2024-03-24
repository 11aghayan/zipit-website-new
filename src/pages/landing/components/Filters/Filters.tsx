import './Filters.css';

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Filters({ isOpen, setIsOpen }: Props) {

  return (
    <aside onClick={() => setIsOpen(false)} className={`filters ${isOpen && 'open'}`}>
      Filters
    </aside>
  );
}