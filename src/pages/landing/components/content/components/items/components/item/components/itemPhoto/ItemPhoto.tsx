type Props = {
  photo: string;
}

export default function ItemPhoto({ photo }: Props) {

  const size = 110;

  return (
    <div className='item-photo' style={{ width: size, height: size }}>
      <img 
        src={photo} 
        alt="item photo" 
        height={size} 
        width={size}
      />
    </div>
  );
}