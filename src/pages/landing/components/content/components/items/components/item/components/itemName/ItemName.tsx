import './ItemName.css';

type Props = {
  name: string;
}

export default function ItemName({ name }: Props) {

  const isLongDesktop = name.length > 30;
  const isLongTablet = name.length > 20;
  const isLongMobile = name.length > 10;

  const long = isLongDesktop ? 'long-desktop' : isLongTablet ? 'long-tablet' : isLongMobile ? 'long-mobile' : '';
  
  return (
    <h3 className={`item-name ${long}`}>
      {name}
    </h3>
  );
}