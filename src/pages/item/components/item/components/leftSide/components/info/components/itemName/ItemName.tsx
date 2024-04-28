import './ItemName.css';

type Props = {
  name: string;
}

export default function ItemName({ name }: Props) {

  return (
    <h2 className='item-name'>
      {name}
    </h2>
  );
}