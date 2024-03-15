import chevronDown from '../../assets/chevron-down.svg';

type Props = {
  size?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  color?: string;
}

export default function Chevron({ size = 1, direction = 'down', color = '#000' }: Props) {

  const degree = direction === 'up' ? 180 : direction === 'left' ? 90 : direction === 'right' ? -90 : 0;

  return (
    <span
      style={{
        width: `${size}rem`,
        height: `${size}rem`,
        transform: `rotateX(${degree}deg)`,
        color,
        transition: 'all 200ms ease-in-out'
      }}
    >
      <img src={chevronDown} alt="chevron icon" />
    </span>
  );
}