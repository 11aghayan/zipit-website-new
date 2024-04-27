import './ItemDescription.css';

type Props = {
  description: string;
}

export default function ItemDescription({ description }: Props) {

  return (
    <p className='item-description'>
      {description}
    </p>
  );
}