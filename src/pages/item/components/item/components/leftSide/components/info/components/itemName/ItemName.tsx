import './ItemName.css';

type Props = {
  name: string;
}

export default function ItemName({ name }: Props) {

  return (
    <h3 className='item-name'>
      {name}
    </h3>
  );
}