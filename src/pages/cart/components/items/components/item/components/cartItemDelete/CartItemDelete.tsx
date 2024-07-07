import { Icon } from '@iconify/react/dist/iconify.js';
import './CartItemDelete.css';

type Props = {
  deleteItem: (id: string) => void;
  id: string;
}

export default function CartItemDelete({ deleteItem, id }: Props) {

  return (
    <button 
      className='cart-item-delete'
      onClick={() => deleteItem(id)}
    >
      <Icon icon='material-symbols-light:delete-forever-rounded' />
    </button>
  );
}