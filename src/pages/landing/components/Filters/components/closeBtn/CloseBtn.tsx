import './CloseBtn.css';

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CloseBtn({ isOpen, setIsOpen }: Props) {

  return (
    <button 
      className='close-btn' 
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className='line line-1'/>
      <div className='line line-2'/>
    </button>
  );
}