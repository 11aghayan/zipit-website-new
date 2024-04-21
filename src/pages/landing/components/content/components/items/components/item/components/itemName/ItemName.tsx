import './ItemName.css';

type Props = {
  name: string;
}

export default function ItemName({ name }: Props) {

  const isLong = name.length > 10;
  
  return (
    <h3 className={`item-name ${isLong ? 'long' : ''}`}>
      {name}
    </h3>
  );
}