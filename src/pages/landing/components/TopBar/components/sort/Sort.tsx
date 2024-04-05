import './Sort.css'; 

type Props = {
  isOpen: boolean;
}

export default function Sort({ isOpen }: Props) {

  return (
    <section className={`sort ${isOpen && 'open'}`}>
      S
    </section>
  );
}